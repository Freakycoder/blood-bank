import express from "express"
import http from "http"
import { Server } from "socket.io";
import cors from "cors"

const app = express();
const port = 3000;
const server = http.createServer(app);

app.use(cors());
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});

const userSocketMap = new Map();

io.on("connection", (socket)=>{
    const userID = socket.handshake.query.userid;

    userSocketMap.set(userID, socket.id);
    
    socket.on("privateMessage" , ({toUserID, message})=>{
        const recipientID = userSocketMap.get(toUserID);
        if(recipientID){
            io.to(recipientID).emit("recieveMessage", message)
        }
    })

    socket.on("recieveMessage", ()=>{
        
    })
})

server.listen(port, () => {
    console.log(`the server is running at ${port}`)
})
