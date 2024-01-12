

export const DRIVERS: any = [

    // undefined,

    {
        id: 1,
        zanimanje:"artist",
        name: "Max Verstappen",
        team: "Red Bull",
        category: "ADVANCED",
        iconUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1701270073824.jpg',
        points: 410
    },
    {
        id: 2,
        zanimanje:"pilot",
        name: "Sergio Perez",
        iconUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg',
        category: 'BEGINNER',
        team: "Red Bull",
        points: 310,
    },

    {
        id: 3,
        zanimanje:"artist",
        name: "Lewis Hamilton",
        team: "Red Bull Racing",
        category: 'ADVANCED',
        points: 210,
        iconUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg',
    }

];


// export function findCourseById(courseId:number) {
//     return DRIVERS.find(course => course.id === courseId);
// }