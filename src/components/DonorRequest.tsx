import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { useEffect, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';


interface Location {
    lat: number | null,
    lng: number | null
}

interface DonationRequest {
    id: number;
    title: string;
    hospital: string;
    location: { lat: number, lng: number };
    urgency: string;
    date: string;
    distance?: number; // Distance will be added later
}

const donationRequests: DonationRequest[] = [
    { id: 1, title: 'O +ve Blood Required', hospital: 'Hospital 1', location: { lat: 40.7128, lng: -74.0060 }, urgency: 'High', date: 'September 12, 2024' },
    { id: 2, title: 'A -ve Blood Required', hospital: 'Hospital 2', location: { lat: 34.0522, lng: -118.2437 }, urgency: 'Medium', date: 'September 15, 2024' },
    { id: 3, title: 'B +ve Blood Needed', hospital: 'Hospital 3', location: { lat: 37.7749, lng: -122.4194 }, urgency: 'Low', date: 'September 20, 2024' }
];

const DonationRequests: React.FC = () => {
    const [donorLocation, setDonorLocation] = useState<Location>({ lat: null, lng: null });
    const [filteredRequests, setFilteredRequests] = useState<DonationRequest[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Get donor's current location using Geolocation API
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setDonorLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => console.error('Error fetching location: ', error)
        );
    }, []);

    // Load Google Maps API
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!, // Ensure this is correctly configured in your environment
    });

    // Fetch distances using Google Maps Distance Matrix API
    useEffect(() => {
        if (donorLocation.lat !== null && donorLocation.lng !== null && isLoaded) {
            const service = new window.google.maps.DistanceMatrixService();

            const hospitalLocations = donationRequests.map(request => ({
                lat: request.location.lat,
                lng: request.location.lng
            }));

            service.getDistanceMatrix(
                {
                    origins: [{ lat: donorLocation.lat, lng: donorLocation.lng }],
                    destinations: hospitalLocations,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                    if (status === 'OK' && response?.rows?.[0]?.elements) {
                        const distances = response.rows[0].elements;
                        const requestsWithDistances = donationRequests.map((request, index) => ({
                            ...request,
                            distance: distances[index].distance?.value, // distance in meters
                        }));
                        const sortedRequests = requestsWithDistances.sort((a, b) => (a.distance || 0) - (b.distance || 0));
                        setFilteredRequests(sortedRequests);
                        setLoading(false);
                    } else {
                        console.error('Error fetching distances: ', status);
                    }
                }
            );
        }
    }, [donorLocation, isLoaded]);

    if (loading || !isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-9 auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            {filteredRequests.map((request) => (
                <Card key={request.id} className="transition-all hover:scale-105 col-span-3">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">{request.title}</CardTitle>
                        <CardDescription>From {request.hospital}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            Distance: {(request.distance! / 1000).toFixed(2)} km
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant='outline'>View Details</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Request Details</DialogTitle>
                                    <DialogDescription>
                                        Blood Type: {request.title} <br />
                                        Required By: {request.date} <br />
                                        From: {request.hospital} <br />
                                        Urgency: {request.urgency} <br />
                                        Additional Details: This is an urgent request for a patient in critical condition. Please respond as soon as possible.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button variant="secondary">Close</Button>
                                    <Button variant="default">Accept & Chat</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
export default DonationRequests;