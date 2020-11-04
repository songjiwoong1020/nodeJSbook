setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버에 고장을 내주마!');
    }
    catch(err){
        console.error(err);
    }
}, 1000);