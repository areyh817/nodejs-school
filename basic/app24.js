setInterval(() => {
    console.log('시작');
    try{
        throw new Error('무한출력');
        // throw new Errot() 에러를 강제 발생
    }
    catch(err)
    {
        console.error(err);
    }
}, 500);