import { Link } from "react-router";
import { Resend } from 'resend';

const resend = new Resend('re_bFVKHQVP_Gsgvt1n1unXpfsScJF6Kmt6a');
    
resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'alexelo.swift@gmail.com',
  subject: 'She said clicked no bruh...',
  html: '<p>hehehee, just wait a bit.</p>'
});

export default function No() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 min-h-screen overflow-y-auto overflow-x-hidden">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Oh. Well... I did not see that coming, are you sure?</h1>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGVoNXlzdDhnOTgxbnIxNnk2d3Vrajg3OWlkZWZydzJncXBxOXp5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9lusxBBUsTz8Fk029b/giphy.gif"
          alt="Sad GIF"
          className="mb-8"
        />
        <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600"
        >
          No
        </Link>

        <Link
          to="/yes"
          className="bg-red-500 text-white px-6 py-4 rounded-lg hover:bg-red-600"
        >
          No, I am sure I pressed the wrong button
        </Link>
      </div>
      </div>
    );
  }