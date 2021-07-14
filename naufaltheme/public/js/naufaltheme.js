console.log("huhuy");

window.onload = function(){
    console.log("2234324");


    const div = document.createElement("div");
    div.classList.add("standard-sidebar-section");
    const div2 = document.createElement("div");
    div2.classList.add("standard-sidebar-label");
    const label = document.createTextNode("HR");

    div2.appendChild(label);
    div.appendChild(div2);

    var menu = [{
        text: "Leave Application",
        link: 'http://google.com',
      }, {
        text: "Claim Application",
        link: 'http://google.com',
      }, {
        text: "Shift Application",
        link: 'http://google.com',
      }, {
        text: "Travel Application",
        link: 'http://google.com',
      },{
        text: "Appraisal",
        link: 'http://google.com',
      }];

      for (var i = 0; i < menu.length; i++) {
        const link = document.createElement("a");
        const firstSpan = document.createElement("span");
        const scndSpan = document.createElement("span");
        const linklabel = document.createTextNode(menu[i].text);
        link.setAttribute('href', menu[i].link);
        link.classList.add("desk-sidebar-item");
        link.classList.add("standard-sidebar-item");
        scndSpan.classList.add("sidebar-item-label");
        scndSpan.appendChild(linklabel);
        link.appendChild(firstSpan);
        link.appendChild(scndSpan);
        div.appendChild(link);
      }

   

    document.querySelector(".desk-sidebar").appendChild(div);
}

