


// <script>

// function togglePostSize(post) {
//         post.classList.toggle('expanded');
//         const posts = document.querySelectorAll('.post');
//         const posterTitles = document.querySelectorAll('.poster-title');

//         for (const otherPost of posts) {
//             if (otherPost !== post) {
//                 otherPost.classList.toggle('expanded');
//             }
//         }

//         for (const title of posterTitles) {
//             if (post.classList.contains('expanded')) {
//                 title.style.display = "none";
//             } else {
//                 title.style.display = "flex";
//             }
//         }

//         if (post.classList.contains('expanded')) {
//             window.scrollTo(0, post.offsetTop);
//             history.pushState({ expandedPost: true }, "");
//         } else {
//             history.pushState({ expandedPost: false }, "");
//         }
//     }

//     window.addEventListener("popstate", function(e) {
//         if (e.state && e.state.expandedPost) {
//             const expandedPost = document.querySelector('.post.expanded');
//             if (expandedPost) {
//                 togglePostSize(expandedPost);
//             }
//         }
//     });
// </script>


    function togglePostSize(post) {
        post.classList.toggle('expanded');
        const posts = document.querySelectorAll('.post');
        const posterTitles = document.querySelectorAll('.poster-title');

        for (const otherPost of posts) {
            if (otherPost !== post) {
                otherPost.classList.toggle('expanded');
            }
        }

        for (const title of posterTitles) {
            if (post.classList.contains('expanded')) {
                title.style.display = "none";
            } else {
                title.style.display = "flex";
            }
        }

        if (post.classList.contains('expanded')) {
            // window.scrollTo(0, post.offsetTop);
        }
    }

// <script>

        // function togglePostSize(post) {
        //     post.classList.toggle('expanded');
        //     const posts = document.querySelectorAll('.post');
        //     for (const otherPost of posts) {
        //         if (otherPost !== post) {
        //             otherPost.classList.toggle('expanded');
        //         }
        //     }
        //     if (post.classList.contains('expanded')) {
        //         window.scrollTo(0, post.offsetTop);
        //     }

        // }
// </script>

