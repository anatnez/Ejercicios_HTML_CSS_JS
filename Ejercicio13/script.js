const users = [

    {username: 'ppc90', age: 30, premium: false},
    
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

for (let user of users) {
    if (user.premium === true) {
        console.log(`El usuario ${user.username} es premium`);
    }
}


const noPremiumUser = users.filter(function(user) {
    return user.premium === false
});
console.log(noPremiumUser);