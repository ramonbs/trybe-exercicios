let singer = {
    name:'Michael Jackson',
    genre:'Pop',
    nickname:'The King of Pop',
    bestAlbums:['Thriller','Bad','Dangerous'],
    bestSong:['Billie Jean','Beat It','Thriller'],
    bornInfo:{
        city:'Gary',
        state:'Indiana'
    },
    diedInfo:{
        city:'Los Angeles',
        state:'California'
    },
    isAlive:false
};

console.log(singer);
console.log(singer.name);
console.log(singer['name']);
console.log(singer['nickname']);
console.log(singer.bestAlbums);

singer['nickAndalbums'] = singer.nickname + ' - ' + singer.bestAlbums
console.table(singer)