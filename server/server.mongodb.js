import { MongoClient, ObjectId } from "mongodb";

const URI = process.env.MONGO_URI

export const db = {
    events: {
        create: createEvent,
        get: getEvents,
        update : updateEvent,
        delete: deleteEvent,
        filter: filterEvents,
    },
    users:{
        create: createUser,
        get: getUsers,
        update: updateUser,
        delete: deleteUser,
        filter: filterUsers,
        count: countUsers,
        logIn: logInUser

    }
}

/*=======USERS=======*/

async function countUsers(){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    console.log('db checkConnection', usersCollection)
    return await usersCollection.countDocuments();
}

async function createUser(user){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    const returnValue = await usersCollection.insertOne(user);
    console.log('db createUser', returnValue, user._id)
    return user;
}


async function getUsers(){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    return await usersCollection.find().toArray();
}
/**
 * Updates an article in the 'articles' collection in the 'shoppingList' database.
 *
 * @param {string} id - The ID of the article to be updated.
 * @param {object} updates - The fields and new values to update the article with.
 * @returns {Promise<UpdateResult>} The result of the update operation.
 */
async function updateUser(id, updates) {
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    const returnValue = await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: updates });
    console.log('db updateUser', returnValue, updates)
    return returnValue
}

/**
 * @param {string} id -the id of the event to be deleted
 * @returns {Promise<object>} the id of the deleted event
 */

async function deleteUser(id) {
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    const returnValue = await usersCollection.deleteOne({ _id: new ObjectId(id) });
    console.log('db deleteUser', returnValue, id)
    return id
}




/**
 * Finds a user in the 'users' collection in the 'shoppingList' database given
 * an email and password.
 *
 * @param {{email: string, password: string}} data - The data to query the user.
 * @returns {Promise<object>} The user object if found, null otherwise.
 */
async function logInUser({email, password}) {
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    return await usersCollection.findOne({ email, password })
  }

/**
 * Filter the events from the database
 * 
 * @param {object} [filter]  - filter to apply to the evetns
 * @returns {Promise<Array<object>>} - the array of the event
 */
async function filterUsers(filter){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const usersCollection = dancingEventsDB.collection('users');
    return await  usersCollection.find(filter).toArray();
}

/*=========EVENTS=======*/

/**
 * Creates a new event in the 'events' collection in the 'dancingEvents' database.
 *
 * @param {object} event - The event to be created.
 * @returns {Promise<object>} The created event.
 */

async function createEvent(event){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const eventsCollection = dancingEventsDB.collection('events');
    const returnValue = await eventsCollection.insertOne(event);
    console.log('db createEvent', returnValue, event.name)
    return event;
}

/**
 * Filter the events from the database
 * 
 * @param {object} [filter]  - filter to apply to the evetns
 * @returns {Promise<Array<object>>} - the array of the event
 */

async function getEvents(filter){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const eventsCollection = dancingEventsDB.collection('events');
    return await  eventsCollection.find(filter).toArray();
}
/**
 * Updates an article in the 'articles' collection in the 'shoppingList' database.
 *
 * @param {string} _id - The ID of the event to be updated.
 * @param {object} updates - The fields and new values to update the event with.
 * @returns {Promise<UpdateResult>} The result of the update operation.
 */
async function updateEvent(_id, updates) {
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const eventsCollection = dancingEventsDB.collection('events');
    const returnValue = await eventsCollection.updateOne({ _id: new ObjectId(_id) }, { $set: updates });
    console.log('db updateEvent', await eventsCollection.findOne({ _id: new ObjectId(_id) }))
    return returnValue
}

/**
 * @param {string} id -the id of the event to be deleted
 * @returns {Promise<object>} the id of the deleted event
 */

async function deleteEvent(id) {
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const eventsCollection = dancingEventsDB.collection('events');
    const returnValue = await eventsCollection.deleteOne({ _id: new ObjectId(id) });
    console.log('db deleteArticle', returnValue, id)
    return id
}

/**
 * Filter the events from the database
 * 
 * @param {object} [filter]  - filter to apply to the evetns
 * @returns {Promise<Array<object>>} - the array of the event
 */
async function filterEvents(filter){
    const client = new MongoClient(URI);
    const dancingEventsDB = client.db('dancingEvents');
    const eventsCollection = dancingEventsDB.collection('events');
    return await  eventsCollection.find(filter).toArray();
}
