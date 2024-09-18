import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Send } from 'lucide-react';

// create state variables for the interfaces (Chat, Message) below and send fetch request and iterate over the data in the below format 

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
}

interface Message {
  id: number;
  chatId: number;
  sender: 'user' | 'hospital';
  text: string;
  timestamp: Date;
}

const dummyChats: Chat[] = [
  { id: 1, name: 'City General Hospital', lastMessage: 'Thank you for your donation!', avatar: 'CG' },
  { id: 2, name: 'County Medical Center', lastMessage: 'We need O- blood type urgently.', avatar: 'CM' },
  { id: 3, name: 'Children’s Hospital', lastMessage: 'Your last donation helped save a life!', avatar: 'CH' },
  { id: 4, name: 'University Hospital', lastMessage: 'Can you schedule a donation this week?', avatar: 'UH' },
  { id: 5, name: 'Veterans Medical Center', lastMessage: 'We appreciate your continued support.', avatar: 'VM' },
];

const dummyMessages: Record<number, Message[]> = {
  1: [
    { id: 1, chatId: 1, sender: 'hospital', text: 'Hello! We have an urgent need for blood donation.', timestamp: new Date('2024-09-10T10:00:00') },
    { id: 2, chatId: 1, sender: 'user', text: 'I’d be happy to help. When can I come in?', timestamp: new Date('2024-09-10T10:05:00') },
    { id: 3, chatId: 1, sender: 'hospital', text: 'Great! We are open from 9 AM to 5 PM. Can you come today?', timestamp: new Date('2024-09-10T10:10:00') },
    { id: 4, chatId: 1, sender: 'user', text: 'Yes, I will be there at 2 PM.', timestamp: new Date('2024-09-10T10:15:00') },
    { id: 5, chatId: 1, sender: 'hospital', text: 'Thank you for your donation!', timestamp: new Date('2024-09-10T14:30:00') },
  ],
  2: [
    { id: 1, chatId: 2, sender: 'hospital', text: 'We have an urgent need for O- blood type.', timestamp: new Date('2024-09-11T09:00:00') },
    { id: 2, chatId: 2, sender: 'user', text: 'I am outside. How soon do you need it?', timestamp: new Date('2024-09-11T09:05:00') },
    { id: 3, chatId: 2, sender: 'hospital', text: 'As soon as possible. Can you come in today?', timestamp: new Date('2024-09-11T09:10:00') },
  ],
};

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null); //store the ChatID of the selected Chat
  const [Typing, setTyping] = useState<string>('');
  const [chats, setChats] = useState<Chat[]>(dummyChats);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // functions runs when its called by someone
  const scrollToBottom = (forceScroll = false) => { //forceScroll is a boolean paramater who's by default value would be false if nothing is sent when the fn is called.
    if (forceScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); // the element provided by messagesEndRef.current? if present then scroll to the element present on the screen, with a smooth transition.
    }
  };

  // fetch all the chats and messages use the fetch request in the useEffect() hook

  useEffect(() => {
    // Only scroll when new messages are added, not when the chat is opened.
    if (selectedChat !== null) {
      scrollToBottom(false);
    }
  }, [selectedChat]);

  // the following function should send new message and store it in the database as well

  const handleSendMessage = () => {
    if (Typing.trim() && selectedChat !== null) {
      const newMessage: Message = {
        id: dummyMessages[selectedChat] ? Math.max(...dummyMessages[selectedChat].map(m => m.id)) + 1 : 1, //for us the message check wont be the same,coz we'll be sending an array of messages(objects)
        chatId: selectedChat,
        sender: 'user',
        text: Typing,
        timestamp: new Date(),
      };

      // Update dummy messages for the selected chat
      dummyMessages[selectedChat] = dummyMessages[selectedChat]
        ? [...dummyMessages[selectedChat], newMessage]
        : [newMessage];

      // Update lastMessage in chats array dynamically
      setChats(prevChats =>
        prevChats.map(chat =>
          chat.id === selectedChat
            ? { ...chat, lastMessage: Typing }
            : chat
        )
      );

      setTyping('');
      setSelectedChat(selectedChat);
      scrollToBottom(true); // Scroll to bottom after sending the message
    }
  };

  return (
    <Card className="overflow-hidden w-full h-[500px] max-w-md mx-auto flex flex-col" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="px-4 py-2 border-b">
        <CardTitle className="text-lg">
          {selectedChat ? (
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => setSelectedChat(null)} className="mr-2 p-0">
                <ChevronLeft size={24} />
              </Button>
              {chats.find(chat => chat.id === selectedChat)?.name}
            </div>
          ) : (
            'Chats'
          )}
        </CardTitle>
        {selectedChat && <p className="text-sm text-gray-500">September 09, 2024</p>}
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto p-4">
        {selectedChat ? (
          <div className="space-y-2">
            {dummyMessages[selectedChat] ? (
              dummyMessages[selectedChat].map(msg => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 mr-auto'
                    } max-w-[70%]`}
                >
                  <p>{msg.text}</p>
                  <span className="text-xs text-gray-500 block text-right">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))
            ) : (
              <p>Start Typing Messages</p>
            )}
            <div ref={messagesEndRef} />
          </div>
        ) : (
          <div className="space-y-2">
            {chats.map(chat => (
              <div  // 
                key={chat.id}
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => setSelectedChat(chat.id)} //div is clickable bcoz on onClick property
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                  {chat.avatar}
                </div>
                <div>
                  <h3 className="font-bold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {selectedChat && (
        <CardFooter className="border-t p-2">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={Typing}
              onChange={(e) => setTyping(e.target.value)}

              className="flex-grow"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send size={20} />
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ChatComponent;
