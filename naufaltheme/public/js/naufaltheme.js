console.log("huhuy");
const url = window.location.origin;

var result = null;

window.addEventListener('locationchange', function(){
  console.log('location changed!');
})

window.onhashchange = function() { 
  console.log('location changedwqwq!');  
}

window.onpopstate = function() { 
  console.log('location changew22d!');
}

function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
}
  
addCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

async function hehe(){

  let newParent = document.querySelector('.layout-main-section-wrapper');
  let oldParent = document.querySelector('.page-head');

  while (oldParent.childNodes.length > 0) {
    newParent.prepend(oldParent.childNodes[0]);
  }
}

const balance = [];
var leaveWidget = [{
  title: "Annual",
  amount: 2,
},{
  title: "Unpaid",
  amount: 2,
},{
  title: "Sick",
  amount: 2,
},{
  title: "Emergency",
  amount: 2,
},{
  title: "Mariage",
  amount: 2,
}];

async function getBalance(id, types, bool){
  frappe.call({
    method: "erpnext.hr.doctype.leave_application.leave_application.get_leave_balance_on", //dotted path to server method
    args: {
      employee: id,
      date:  "2021-07-13",
      to_date:  "2022-07-13",
      leave_type: types,
      consider_all_leaves_in_the_allocation_period: true
    },
    callback: function(r) {
        // code snippet\
        console.log(r.message);
        balance.push(r.message);
        if(bool){
          setTimeout(function(){ 
            if(document.querySelector('.desk-page').getAttribute("data-page-name") == "Home"){
              addLeaveBox();
            } else if(document.querySelector('.desk-page').getAttribute("data-page-name") == "HR"){
              addLeaveWidget("testing");
            }
          }, 2000);
        }
    }
  });
}

setTimeout(function(){ 
  printText(frappe.db.get_value("Employee", {employee_name:frappe.session.user_fullname}, "name"));
}, 6000);

function printText(obj){-
  console.log("hehe");
  setTimeout(function(){ 
    const ready = obj.readyState;
    result = obj.responseJSON.message.name;
    console.log(result);
    if(frappe.session.user!="Guest"){
      getBalance(result, "Annual Leave", false);
      getBalance(result, "Unpaid Leave", false);
      getBalance(result, "Sick Leave", false);
      getBalance(result, "Emergency Leave", false);
      getBalance(result, "Mariage Leave", true);
    }
  }, 3000);
  
}


window.onload = function(){

  console.logShallowCopy = function () {
    
};

  const home = document.querySelector('.navbar-home');
  home.addEventListener("click", redirect.bind(null, url+"/app/"));
    console.log("2234324");
    //hehe();
  
    const login = document.querySelector('.for-login .page-card-head img');
    
    if(login != null){
      setTimeout(function(){ 
        login.setAttribute('style', "max-height: 200px");
        const loginSection = document.querySelector('.for-login');

        const loginTable = document.createElement("table");
        const logintr = document.createElement("tr");
        const loginImage = document.createElement("th");
        const loginBox = document.createElement("th");

        logintr.appendChild(loginImage);
        logintr.appendChild(loginBox);
        loginTable.appendChild(logintr);

        loginSection.appendChild(loginTable);

        let newParent = document.querySelector('.for-login .page-card-head img');
        let oldParent = loginBox;

        while (oldParent.childNodes.length > 0) {
          newParent.prepend(oldParent.childNodes[0]);
        }
      }, 1000);
      
    }

    

    let testing = document.querySelector('.desk-sidebar');

    if(testing != null){
      for (var i = 0; i < testing.childNodes.length; i++) {
        testing.childNodes[i].setAttribute("style", "display:none;");
      }  
    }

    let page = document.querySelector('.desk-page');
    console.log("a");
    console.log(page.getAttribute("data-page-name"));

    if(page.getAttribute("data-page-name") == "Home"){
      console.log("hayah");
      page.classList.add("asas");
      homeDash();
    }
    
      var main = [{
        text: "Home",
        link: url+"/app/home",
        icon: "https://image.flaticon.com/icons/png/512/609/609803.png",
      }];

      var hr = [{
          text: "HR Dashboard",
          link: url+"/app/hr",
          icon: "https://image.flaticon.com/icons/png/512/3408/3408591.png",
        },{
          text: "Leave Application",
          link: url+"/app/leave-application/new-leave-application-1",
          icon: "https://image.flaticon.com/icons/png/512/1828/1828490.png",
        }, {
          text: "Expense Claim",
          link: url+ "/app/expense-claim/new-expense-claim-1",
          icon: "https://image.flaticon.com/icons/png/512/2646/2646183.png",
        }, {
          text: "Shift Application",
          link: url+"/app/shift-request/new-shift-request-1",
          icon: "https://image.flaticon.com/icons/png/512/584/584547.png",
        }, {
          text: "Travel Application",
          link: url+"/app/travel-request",
          icon: "https://image.flaticon.com/icons/png/512/201/201623.png",
        },{
          text: "Appraisal",
          link: url+"/app/appraisal/new-appraisal-1",
          icon: "https://image.flaticon.com/icons/png/512/786/786432.png",
        },{
          text: "Attendance Check In",
          link: url+"/app/employee-checkin/new-employee-checkin-1",
          icon: "https://image.flaticon.com/icons/png/512/2620/2620267.png",
        }];

        var payroll = [{
          text: "Payroll Dashboard",
          link: url+"/app/payroll",
          icon: "https://image.flaticon.com/icons/png/512/2738/2738435.png",
        },{
          text: "Salary Slip",
          link: url+"/app/salary-slip",
          icon: "https://image.flaticon.com/icons/png/512/893/893104.png",
        }];

        var report = [{
          text: "Reporting",
          link: url+"/app/leave-application/view/report",
          icon: "https://image.flaticon.com/icons/png/512/4371/4371114.png",
        },{
          text: "Leave Report",
          link: url+"/app/leave-application/view/report",
          icon: "https://image.flaticon.com/icons/png/512/3094/3094929.png",
        },{
          text: "Claim Report",
          link: url+"/app/expense-claim/view/report",
          icon: "https://image.flaticon.com/icons/png/512/4149/4149709.png",
        },{
          text: "Travel Report",
          link: url+"/app/travel-request/view/report",
          icon: "https://image.flaticon.com/icons/png/512/1985/1985362.png",
        },{
          text: "Attendance Report",
          link: url+"/app/attendance/view/report",
          icon: "https://image.flaticon.com/icons/png/512/4470/4470312.png",
        }];

      addSection("Main", main);
      addSection("HR", hr);
      addSection("Payroll", payroll);
      addDropdownSection("Report", report);
      
  }

  function addSection(name, data){
    const div = document.createElement("div");
    div.classList.add("standard-sidebar-section");
    const div2 = document.createElement("div");
    div2.classList.add("standard-sidebar-label");
    const label = document.createTextNode(name);

    div2.appendChild(label);
    div.appendChild(div2);

    for (var i = 0; i < data.length; i++) {
      const link = document.createElement("a");
      const firstSpan = document.createElement("span");
      const scndSpan = document.createElement("span");
      const img = document.createElement("img");
      const linklabel = document.createTextNode(data[i].text);
      
      link.classList.add("desk-sidebar-item");
      link.classList.add("standard-sidebar-item");
      img.setAttribute('src', data[i].icon);
      img.setAttribute('width', "20");
      img.classList.add("icon");
      firstSpan.appendChild(img);
      scndSpan.classList.add("sidebar-item-label");
      scndSpan.appendChild(linklabel);
      link.appendChild(firstSpan);
      link.appendChild(scndSpan);
      div.appendChild(link);
      link.addEventListener("click", redirect.bind(null, data[i].link));

    }

    document.querySelector(".desk-sidebar").appendChild(div);
} 

function redirect(link){
  window.location.href = link;
}

function addLink(name, url, imgUrl, source){
  const link = document.createElement("a");
  const firstSpan = document.createElement("span");
  const scndSpan = document.createElement("span");
  const img = document.createElement("img");
  const linklabel = document.createTextNode(name);
  link.setAttribute('href', url);
  link.classList.add("desk-sidebar-item");
  link.classList.add("standard-sidebar-item");
  img.setAttribute('src', imgUrl);
  img.setAttribute('width', "20");
  img.classList.add("icon");
  firstSpan.appendChild(img);
  scndSpan.classList.add("sidebar-item-label");
  scndSpan.appendChild(linklabel);
  link.appendChild(firstSpan);
  link.appendChild(scndSpan);
  source.appendChild(link);
}

function addLeaveBox(){

  var leaveWidget2 = [{
    title: "Annual",
  },{
    title: "Unpaid",
  },{
    title: "Sick",
  },{
    title: "Emergency",
  },{
    title: "Mariage",
  }];

  const title = document.createElement("h2");
  title.classList.add("leave-box-title-naufal");
  title.appendChild(document.createTextNode("Leave Allocation Balance"));
  const div = document.createElement("div");
  div.classList.add("leave-box-widget-naufal");
  const table = document.createElement("table");
  table.classList.add("leave-box-table-widget-naufal");

  for (var i = 0; i < 2; i++) {
    const tr = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      if(i==0){
        const td = document.createElement("td");
        console.log("le" + balance.length + " now " + j);
        td.appendChild(document.createTextNode(balance[j]));
        td.classList.add("leave-box-widget-naufal-balance-amount");
        tr.appendChild(td);
      }else{
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(leaveWidget2[j].title));
        td.classList.add("leave-box-widget-naufal-balance-title");
        tr.appendChild(td);
      }
    }
    table.appendChild(tr);
  }
  div.appendChild(title);
  div.appendChild(table);

  let deskPage = document.querySelector('.desk-page');

  console.log("hoy");
  console.log(deskPage.getAttribute("data-page-name"));
  document.querySelector(".layout-main-section").appendChild(div);
} 


function addLeaveWidget(name){
  const div = document.createElement("div");
  div.classList.add("leave-widget-naufal");
  const table = document.createElement("table");
  table.classList.add("leave-table-widget-naufal");
  
  //div2.classList.add("standard-sidebar-label");
  //const label = document.createTextNode(name);

  for (var i = 0; i < 2; i++) {
    const tr = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
      if(i==0){
        const td = document.createElement("td");
        if(j==0){
          td.appendChild(document.createTextNode("Leave Allocation Balance"));
          td.appendChild(document.createElement("br"));
          td.appendChild(document.createTextNode(result));
          td.classList.add("leave-widget-naufal-title");
          td.setAttribute('rowspan', 2);
        }else{
          console.log("le" + balance.length + " now " + j);
          td.appendChild(document.createTextNode(balance[j-1]));
          td.classList.add("leave-widget-naufal-balance-amount");
        }
        tr.appendChild(td);
      }else{
        if(j==0){
        }else{
          const td = document.createElement("td");
          td.appendChild(document.createTextNode(leaveWidget[j-1].title));
          td.classList.add("leave-widget-naufal-balance-title");
          tr.appendChild(td);
        }
      }
    }
    table.appendChild(tr);
  }

  div.appendChild(table);

  let deskPage = document.querySelector('.desk-page');

  console.log("hoy");
  console.log(deskPage.getAttribute("data-page-name"));
  document.querySelector(".layout-main-section").prepend(div);
} 

function addDropdownSection(name, data){
  const div = document.createElement("div");
  div.classList.add("standard-sidebar-section");
  const div2 = document.createElement("div");
  div2.classList.add("standard-sidebar-label");
  const label = document.createTextNode(name);

  div2.appendChild(label);
  div.appendChild(div2);

  for (var i = 0; i < data.length; i++) {
    const link = document.createElement("a");
    const firstSpan = document.createElement("span");
    const scndSpan = document.createElement("span");
    
    const img = document.createElement("img");
   
    const linklabel = document.createTextNode(data[i].text);
    //link.setAttribute('href', data[i].link);
    link.classList.add("desk-sidebar-item");
    link.classList.add("standard-sidebar-item");
    img.setAttribute('src', data[i].icon);
    img.setAttribute('width', "20");
    img.classList.add("icon");
   
    firstSpan.appendChild(img);
    scndSpan.classList.add("sidebar-item-label");
    scndSpan.appendChild(linklabel);
    const icon = document.createElement("i");

    link.appendChild(firstSpan);
    link.appendChild(scndSpan);
    if(i == 0){
      link.setAttribute('onclick', "toggleDropdown()");
      const trdSpan = document.createElement("span");
      icon.classList.add("fa");
      icon.classList.add("fa-chevron-circle-down");
      trdSpan.appendChild(icon);
      link.appendChild(trdSpan);
    }else{
      link.classList.add("naufal-dropdown");
      link.setAttribute('style', "display: none");
    }
    div.appendChild(link);
  }

  document.querySelector(".desk-sidebar").appendChild(div);
} 

function toggleDropdown() {
  console.log("hehe tis");
  const menu = document.querySelectorAll(".naufal-dropdown");
  
  for (var i = 0; i < menu.length; i++) {
    console.log(menu[i]);
    var attr = menu[i].getAttribute("style");
    console.log("a");
    console.log(attr);
    if(attr == "display: none"){
      menu[i].setAttribute('style', "display: block");
    }else{
      menu[i].setAttribute('style', "display: none");
    }
  }
}

function homeDash(){
  console.log("hihihih");
  const div = document.createElement("div");
  div.classList.add("welcome-widget-naufal");
  const title = document.createElement("h2");
  title.classList.add("welcome-widget-naufal-title");
  const desc = document.createElement("p");
  desc.classList.add("welcome-widget-naufal-desc");
  const titleLabel = document.createTextNode("Hi, Welcome Support!");
  const descLabel = document.createTextNode("this is your dashboard, here you can ....");
  
  title.appendChild(titleLabel);
  desc.appendChild(descLabel);
  div.appendChild(title);
  div.appendChild(desc);

  document.querySelector(".layout-main-section").prepend(div);
}

