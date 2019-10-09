pragma solidity >=0.4.17;

contract Social {

    struct User {
        string name;
        address uadd;
    }
    
    struct Post {
        string caption;
        string description;
        string imgIpfsHash;
        uint likes;
        address owner;
        string timestamp;
        mapping(address => bool) likedBy;
    }
    
    Post[] public posts;
    address public manager;
    mapping(address => bool) public users;
    uint public userCount;
    User[] public peeps;
    
    constructor() public {
        manager = msg.sender;
        userCount = 0;
    }
    
    function createPost (
        string memory caption, string memory description, string memory imgIpfsHash, string memory timestamp
        ) public {


        Post memory newPost = Post({
            caption: caption,
            description: description,
            imgIpfsHash: imgIpfsHash,
            likes: 0,
            owner: msg.sender,
            timestamp: timestamp
        });
        
        posts.push(newPost);
    }
    
    
    function getPostsCount() public view returns (uint) {
        return posts.length;
    }
    
    function likePost(uint index) public payable {
        
        Post storage currPost = posts[index];
        require(!currPost.likedBy[msg.sender]);
        
        currPost.likedBy[msg.sender] = true;
        currPost.likes++;
        
        sendLikes(index, msg.value);
        
    }
    
    function sendLikes(uint index, uint money) public {
        Post storage currPost = posts[index];
        address(uint(currPost.owner)).transfer(money);
    }

    function signIn(string memory name) public {
        require(!users[msg.sender]);
        users[msg.sender] = true;
        userCount++;
        User memory newUser = User({
            name: name,
            uadd: msg.sender
        });
        peeps.push(newUser);
    }

    function isUser(address user) public view returns (bool) {
        return users[user];
    }
    
}