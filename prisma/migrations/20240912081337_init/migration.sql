-- CreateTable
CREATE TABLE "Chat" (
    "ChatID" SERIAL NOT NULL,
    "RecipientName" TEXT NOT NULL,
    "LastMessage" TEXT,
    "Avatar" TEXT DEFAULT 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("ChatID")
);

-- CreateTable
CREATE TABLE "Message" (
    "MessageID" SERIAL NOT NULL,
    "ChatID" INTEGER NOT NULL,
    "Sender" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "TimeStamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("MessageID")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_ChatID_fkey" FOREIGN KEY ("ChatID") REFERENCES "Chat"("ChatID") ON DELETE RESTRICT ON UPDATE CASCADE;
