import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import {beers} from '../data/beers.js'
import {users} from '../data/users.js'
import {events} from '../data/events.js'
import BeerModel from '../models/beer.model.js'
import UserModel from '../models/user.model.js'
import EventModel from '../models/event.model.js'
import { connectDB } from './connectDB.js';

dotenv.config();
connectDB();


const importData = async () => {
    try {
        
        await BeerModel.deleteMany()
        await UserModel.deleteMany()
        await EventModel.deleteMany()

      

        const createUsers = await UserModel.insertMany(users);
        const adminUser = createUsers[0]._id

        const sampleBeers = beers.map(beer => {
            return {...beer, user: adminUser} // we keep everything in products (...product), then put new property 'user'
        })
        const insertBeers = await BeerModel.insertMany(sampleBeers)

        const sampleEvents = events.map(event => {
            return {...event, user: adminUser}
        })
        const insertEvents = await EventModel.insertMany(sampleEvents)
        console.log('Data imported'.green.inverse);
    } catch (error) {
        console.error(`Error : ${error}`.red.inverse)
        process.exit(1)
    }
}



const removeData = async () => {
    try {
        
        await BeerModel.deleteMany()
        await UserModel.deleteMany()
        await EventModel.deleteMany()

        console.log('Data removed'.red.inverse);

    } catch (error) {
        console.error(`Error : ${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    removeData()
}
else {
    importData()
} 