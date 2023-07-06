$(document).ready(function () {
  fetch("https://realresearcher.com/media/wp-json/wp/v2/posts")
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });

  function displayPosts(data) {
    var mediaContainer = document.querySelector(".media__news-block");
    for (var i = 0; i < data.length - 7; i++) {
      const firstPara = data[i].content.rendered;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = firstPara;
      const firstParagraph = tempDiv.querySelector("p");
      const renderPara = firstParagraph.textContent;
      let d = data[i].date;
      d = new Date(d);
      let options = { year: "numeric", month: "long", day: "numeric" };
      let longDate = d.toLocaleDateString("en-US", options);

      var newsCard = `
            <div class="news-card" data-aos="fade-up" data-aos-duration="1000" onclick="window.open('${data[i].link}', '_blank');">
                <div class="news-img">
                    <img src="${data[i].yoast_head_json.og_image[0].url}">
                </div>
                <div class="news-sub-block">
                <div class="date">${longDate}</div>
                <p class="news-title title18dark">
                    ${data[i].title.rendered}
                </p>
                <p class="text14grey news-content">
                    ${renderPara}
                </p>
                </div>
            </div>`;
      mediaContainer.innerHTML += newsCard;
    }
  }
});
