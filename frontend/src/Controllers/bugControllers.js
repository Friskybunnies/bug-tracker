import bugModel from '../Models/bugModel'

export function retrieveBugs() {
    let data = [];
    
    data.push(new bugModel({
        _id: 23456789,
        name: 'Crash on Load',
        details: 'Crashes after 3 seconds',
        steps: 'Open application and it will crash',
        version: 'V2.0',
        assigned: 'Justin Farris',
        creator: 'Justin Farris',
        priority: 1,
        time: '23:38', // set on server side
    }))
    data.push(new bugModel({
        _id: 23456789,
        name: 'Won\'t Load',
        details: 'Crashes after 3 seconds',
        steps: 'Open application and it will crash',
        version: 'V2.0',
        assigned: 'Justin Farris',
        creator: 'Justin Farris',
        priority: 3,
        time: '23:38', // set on server side
    }))

    let sorted = data.sort((a, b) => {return a.priority - b.priority});
    return sorted;

}