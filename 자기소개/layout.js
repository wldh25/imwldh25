const myDiary = document.getElementById('myDiary');
myDiary.addEventListener('click', function(){
    alert('개발자의 역량 부족으로 인한 입장 불가!');
})

const myPic = document.getElementById('myPic');
myPic.addEventListener('click', function(){
    alert('개발자의 역량 부족으로 인한 입장 불가!');
})

const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");
instaForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;
  addComment(usernameInput.value, commentInput.value);
  usernameInput.value = "";
  commentInput.value = "";
});

const addComment = (username, comment) => {
const newComment = document.createElement("li");
const bTag = document.createElement("b");
bTag.append(username);
newComment.append(bTag);
newComment.append(`- ${comment}`);
commentsContainer.append(newComment);
};
