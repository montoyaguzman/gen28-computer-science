const videos = [
    { 
        title: 'Skin care para principiantes',
        date: '29/09/2023'
    },
    { 
        title: '¿Como armar mi primer PC?',
        date: '9/10/2010'
    },
    { 
        title: 'Una gatita que le gusta el Mambo',
        date: '10/02/2022'
    }
];

let i = 0;
while(i < videos.length) {
    const video = videos[i];
    console.log(video.title);
    i++;
}


for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(video.title);
}

videos.forEach((element) => {
    console.log(element.title);
});

for (let item of videos) {
    console.log(item.title);
}