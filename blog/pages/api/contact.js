// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {MongoClient} from 'mongodb';

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { email, name, message } = req.body;
    
    if(
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ){
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }

    //store it in a database
    const newMessage = {
      email,
      name,
      message
    };

    MongoClient.connect('');

    res.status(201).json({ messagem: 'Successfully stored message!', message: newMessage });
  }

  res.status(200).json({ name: 'John Doe' })
}
