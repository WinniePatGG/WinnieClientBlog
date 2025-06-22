const posts = [
    {
      title: "Install Tutorial",
      content: "Download version from here. Install in 1.21.4 Fabric Modpack",
      downloadLink: null
    },
    {
      title: "v0.0.1!",
      content: "First version. Simple features",
      downloadLink: "http://194.164.200.242:8000/download/WinnieClient-0.0.1.jar"
    }
  ];
  
  function renderPosts() {
    const container = document.getElementById("blog-container");
    posts.forEach(post => {
      const el = document.createElement("div");
      el.className = "blog-post";
      el.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="${post.downloadLink}" class="download-button" target="_blank">Download</a>
      `;
      container.appendChild(el);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderPosts);
  