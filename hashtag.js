function getTrendingHashtags(posts){
    const one_hour=60*60;//one hour in seconds
    const currentTime=Date.now();

    //filters posts from last one hour
    const recentPosts=posts.filter(post=>currentTime-post.timestamp<=one_hour);

    const hashtagCount={};

    //count occurences of each hashtag
    recentPosts.forEach(post=>{
        post.hashtags.forEach(hashtag=>{
            hashtagCount[hashtag]=(hashtagCount[hashtag]||0)+1;
        });
    });

    //return hashtags appearing in more than 5 posts
    return Object.keys(hashtagCount).filter(hashtag=>hashtagCount[hashtag]>=2);

}

const posts=[
    {timestamp: 1745689987, hashtags:['#javascript','#coding']},
    {timestamp: Date.now()-26, hashtags:['#coding','#javascript']},
    {timestamp: Date.now()-12, hashtags:['#javascript','#coding']},
    {timestamp: Date.now()-20, hashtags:['#javascript']},
    {timestamp: Date.now()-60, hashtags:['#javascript','#coding']},
    {timestamp: Date.now()-5, hashtags:['#webdev','#javascript']},
];

console.log(getTrendingHashtags(posts));