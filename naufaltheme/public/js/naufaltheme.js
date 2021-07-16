console.log("huhuy");
const url = window.location.origin;
console.log(url);

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

frappe.ui.form.on("Leave Application", {
  get_leave_balance: function(frm) {
    if(frm.doc.docstatus==0 && frm.doc.employee && frm.doc.leave_type && frm.doc.from_date && frm.doc.to_date) {
      return frappe.call({
        method: "erpnext.hr.doctype.leave_application.leave_application.get_leave_balance_on",
        args: {
          employee: frm.doc.employee,
          date: frm.doc.from_date,
          to_date: frm.doc.to_date,
          leave_type: frm.doc.leave_type,
          consider_all_leaves_in_the_allocation_period: true
        },
        callback: function(r) {
          console.log("ssasa");
          console.log(r);
          if (!r.exc && r.message) {
            frm.set_value('leave_balance', r.message);
          }
          else {
            frm.set_value('leave_balance', "0");
          }
        }
      });
    }
  },
});

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

async function getBalance(types, bool){
  frappe.call({
    method: "erpnext.hr.doctype.leave_application.leave_application.get_leave_balance_on", //dotted path to server method
    args: {
      employee: "HR-EMP-00004",
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
          addLeaveWidget("testing");
        }
    }
  });
}

window.onload = function(){
    console.log("2234324");
    //hehe();

    getBalance("Annual Leave", false);
    getBalance("Unpaid Leave", false);
    getBalance("Sick Leave", false);
    getBalance("Emergency Leave", false);
    getBalance("Mariage Leave", true);

    

    let testing = document.querySelector('.desk-sidebar');

    console.log(testing.childNodes.length);

    for (var i = 0; i < testing.childNodes.length; i++) {
      testing.childNodes[i].setAttribute("style", "display:none;");
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
          link: url+'app/leave-application',
          icon: "https://image.flaticon.com/icons/png/512/1828/1828490.png",
        }, {
          text: "Expense Claim",
          link: 'http://google.com',
          icon: "https://image.flaticon.com/icons/png/512/2646/2646183.png",
        }, {
          text: "Shift Application",
          link: 'http://google.com',
          icon: "https://image.flaticon.com/icons/png/512/584/584547.png",
        }, {
          text: "Travel Application",
          link: 'http://google.com',
          icon: "https://image.flaticon.com/icons/png/512/201/201623.png",
        },{
          text: "Appraisal",
          link: 'http://google.com',
          icon: "https://image.flaticon.com/icons/png/512/786/786432.png",
        },{
          text: "Attendance",
          link: 'http://google2.com',
          icon: "https://image.flaticon.com/icons/png/512/2620/2620267.png",
        }];

        var payroll = [{
          text: "Payroll Dashboard",
          link: 'app/leave-application',
          icon: "https://image.flaticon.com/icons/png/512/2738/2738435.png",
        },{
          text: "Salary Slip",
          link: 'app/leave-application',
          icon: "https://image.flaticon.com/icons/png/512/893/893104.png",
        }];

        var report = [{
          text: "Reporting",
          link: 'app/leave-application',
          icon: "https://image.flaticon.com/icons/png/512/4371/4371114.png",
        }];

      addSection("Main", main);
      addSection("HR", hr);
      addSection("Payroll", payroll);
      addSection("Report", report);
      
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
      link.setAttribute('href', data[i].link);
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
    }

    document.querySelector(".desk-sidebar").appendChild(div);
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
          td.classList.add("leave-widget-naufal-title");
          td.setAttribute('rowspan', 2);
        }else{
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

  document.querySelector(".layout-main-section").prepend(div);
} 
