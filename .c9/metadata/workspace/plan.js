{"filter":false,"title":"plan.js","tooltip":"/plan.js","undoManager":{"mark":55,"position":55,"stack":[[{"start":{"row":0,"column":0},"end":{"row":89,"column":21},"action":"insert","lines":["function sendMessage(message, itsMe) { // ...Mario","  var messageList = document.getElementById(\"message-list\");","  ","  var scrollToBottom = (messageList.scrollHeight - messageList.scrollTop - messageList.clientHeight < 80);","","  var lastMessage = messageList.children[messageList.children.length-1];","  ","  var newMessage = document.createElement(\"span\");","  newMessage.innerHTML = message;","","  var className;","  ","  if(itsMe)","  {","    className = \"me\";","    scrollToBottom = true;","  }","  else","  {","    className = \"not-me\";","  }","  ","  if(lastMessage && lastMessage.classList.contains(className))","  {","    lastMessage.appendChild(document.createElement(\"br\"));","    lastMessage.appendChild(newMessage);","  }","  else","  {","    var messageBlock = document.createElement(\"div\");","    messageBlock.classList.add(className);","    messageBlock.appendChild(newMessage);","    messageList.appendChild(messageBlock);","  }","  ","  if(scrollToBottom)","    messageList.scrollTop = messageList.scrollHeight;","}","","var message = document.getElementById(\"message-input\");","message.addEventListener(\"keypress\", function(event) {","  var key = event.which || event.keyCode;","  if(key === 13 && this.value.trim() !== \"\")","  {","    sendMessage(this.value, true);","    this.value = \"\";","  }","});","","sendMessage(\"Hello!\", true);","sendMessage(\"Hey!\", false);","sendMessage(\"How are you doing?\", false);","sendMessage(\"I'm doing well.\", true);","sendMessage(\"What about you?\", true);","sendMessage(\"Good\", false);","","function sendRandomMessages()","{","  // http://www.conversationstarters.com/generator.php","  var messageList = [","    \"What is your biggest concern about the future?\",","    \"What is your biggest fear?\",","    \"At what age would you consider someone to be old?\",","    \"What is your favorite home cooked dish?\",","    \"What is the biggest priority in your life right now?\",","    \"Where did you go on your last vacation?\",","    \"What was the biggest life change you've gone through?\",","    \"Do you have any siblings?\",","    \"What's your family like?\",","    \"If you knew that you only had a year left to live, what would you do?\",","    \"What do you usually eat in the morning?\",","    \"What's in your fridge?\",","    \"Do you recycle?\",","    \"What are some things that you should not not say during a job interview?\",","    \"If you could go back in time and change one thing, what would that be?\",","    \"What do you wear to sleep?\",","    \"What is the last thing you do before you go to sleep?\",","    \"If you could only eat one thing for the rest of your life, what would it be?\",","    \"Would you rather be homeless for a year or be in jail for a year?\",","    \"What do you do for fun?\",","    \"stuff\"","  ];","  var choosenMessage = messageList[Math.floor(Math.random() * messageList.length)];","  ","  sendMessage(choosenMessage, false);","  ","  setTimeout(sendRandomMessages, Math.random()*100 + 70);","}","","sendRandomMessages();"],"id":1}],[{"start":{"row":40,"column":54},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":41,"column":2},"end":{"row":41,"column":3},"action":"insert","lines":["c"],"id":3}],[{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["o"],"id":4}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["n"],"id":5}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":41,"column":6},"end":{"row":41,"column":7},"action":"insert","lines":["o"],"id":7}],[{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["l"],"id":8}],[{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["."],"id":10}],[{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["l"],"id":11}],[{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["o"],"id":12}],[{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["g"],"id":13}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":15},"action":"insert","lines":["()"],"id":14}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":[";"],"id":15}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"remove","lines":[";"],"id":16}],[{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":[";"],"id":17}],[{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"remove","lines":[";"],"id":18}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":16},"action":"insert","lines":["\"\""],"id":19}],[{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["t"],"id":20}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":["h"],"id":21}],[{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"insert","lines":["i"],"id":22}],[{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"insert","lines":["s"],"id":23}],[{"start":{"row":41,"column":19},"end":{"row":41,"column":20},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":["h"],"id":25}],[{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["s"],"id":26}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":["o"],"id":27}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"remove","lines":["o"],"id":28}],[{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"remove","lines":["s"],"id":29}],[{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"remove","lines":["h"],"id":30}],[{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":["s"],"id":31}],[{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["h"],"id":32}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":["o"],"id":33}],[{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":["u"],"id":34}],[{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["l"],"id":35}],[{"start":{"row":41,"column":25},"end":{"row":41,"column":26},"action":"insert","lines":["d"],"id":36}],[{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":[" "],"id":37}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["u"],"id":38}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":["n"],"id":39}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"remove","lines":["n"],"id":40}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"remove","lines":["u"],"id":41}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["r"],"id":42}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":["u"],"id":43}],[{"start":{"row":41,"column":29},"end":{"row":41,"column":30},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":41,"column":29},"end":{"row":41,"column":30},"action":"remove","lines":[" "],"id":45}],[{"start":{"row":41,"column":29},"end":{"row":41,"column":30},"action":"insert","lines":["n"],"id":46},{"start":{"row":41,"column":30},"end":{"row":41,"column":31},"action":"insert","lines":[" "]}],[{"start":{"row":41,"column":30},"end":{"row":41,"column":31},"action":"remove","lines":[" "],"id":47}],[{"start":{"row":41,"column":32},"end":{"row":41,"column":33},"action":"insert","lines":[";"],"id":48}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":52}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["$(document).ready(function(){"],"id":53}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"insert","lines":["  "],"id":54},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"insert","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"insert","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["  "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"insert","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"insert","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"insert","lines":["  "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"insert","lines":["  "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"insert","lines":["  "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"insert","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["  "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"insert","lines":["  "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["  "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"insert","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"insert","lines":["  "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":2},"action":"insert","lines":["  "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":2},"action":"insert","lines":["  "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":2},"action":"insert","lines":["  "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":2},"action":"insert","lines":["  "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":2},"action":"insert","lines":["  "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":2},"action":"insert","lines":["  "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":2},"action":"insert","lines":["  "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":2},"action":"insert","lines":["  "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":2},"action":"insert","lines":["  "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":2},"action":"insert","lines":["  "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":2},"action":"insert","lines":["  "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":2},"action":"insert","lines":["  "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":2},"action":"insert","lines":["  "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":2},"action":"insert","lines":["  "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["  "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":2},"action":"insert","lines":["  "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":2},"action":"insert","lines":["  "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":2},"action":"insert","lines":["  "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":2},"action":"insert","lines":["  "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":2},"action":"insert","lines":["  "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":2},"action":"insert","lines":["  "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":2},"action":"insert","lines":["  "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":2},"action":"insert","lines":["  "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":2},"action":"insert","lines":["  "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"insert","lines":["  "]},{"start":{"row":74,"column":0},"end":{"row":74,"column":2},"action":"insert","lines":["  "]},{"start":{"row":75,"column":0},"end":{"row":75,"column":2},"action":"insert","lines":["  "]},{"start":{"row":76,"column":0},"end":{"row":76,"column":2},"action":"insert","lines":["  "]},{"start":{"row":77,"column":0},"end":{"row":77,"column":2},"action":"insert","lines":["  "]},{"start":{"row":78,"column":0},"end":{"row":78,"column":2},"action":"insert","lines":["  "]},{"start":{"row":79,"column":0},"end":{"row":79,"column":2},"action":"insert","lines":["  "]},{"start":{"row":80,"column":0},"end":{"row":80,"column":2},"action":"insert","lines":["  "]},{"start":{"row":81,"column":0},"end":{"row":81,"column":2},"action":"insert","lines":["  "]},{"start":{"row":82,"column":0},"end":{"row":82,"column":2},"action":"insert","lines":["  "]},{"start":{"row":83,"column":0},"end":{"row":83,"column":2},"action":"insert","lines":["  "]},{"start":{"row":84,"column":0},"end":{"row":84,"column":2},"action":"insert","lines":["  "]},{"start":{"row":85,"column":0},"end":{"row":85,"column":2},"action":"insert","lines":["  "]},{"start":{"row":86,"column":0},"end":{"row":86,"column":2},"action":"insert","lines":["  "]},{"start":{"row":87,"column":0},"end":{"row":87,"column":2},"action":"insert","lines":["  "]},{"start":{"row":88,"column":0},"end":{"row":88,"column":2},"action":"insert","lines":["  "]},{"start":{"row":89,"column":0},"end":{"row":89,"column":2},"action":"insert","lines":["  "]},{"start":{"row":90,"column":0},"end":{"row":90,"column":2},"action":"insert","lines":["  "]},{"start":{"row":91,"column":0},"end":{"row":91,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":91,"column":23},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":55},{"start":{"row":92,"column":0},"end":{"row":92,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":92,"column":2},"end":{"row":92,"column":3},"action":"insert","lines":["}"],"id":56},{"start":{"row":92,"column":0},"end":{"row":92,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":92,"column":1},"end":{"row":92,"column":2},"action":"insert","lines":[")"],"id":57}],[{"start":{"row":92,"column":2},"end":{"row":92,"column":3},"action":"insert","lines":[";"],"id":58}],[{"start":{"row":88,"column":4},"end":{"row":88,"column":7},"action":"insert","lines":["// "],"id":59}]]},"ace":{"folds":[],"scrolltop":1090,"scrollleft":0,"selection":{"start":{"row":88,"column":43},"end":{"row":88,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":63,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1493847938526,"hash":"a54fcaf7b609fcf3962f265cf39de71a45eed548"}