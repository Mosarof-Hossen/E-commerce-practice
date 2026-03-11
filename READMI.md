# 1/ What is the difference between null and undefined?
- JavaScript-এ null এবং undefined দুটিই এমন value যা বোঝায় “কোনো value নেই” 
undefined - Value এখনো set করা হয়নি । 
null - ইচ্ছা করে empty value রাখা ।
 

# 2/ What is the use of the map() function in JavaScript? How is it different from forEach()?

- map() array method ব্যবহার করা হয় একটি array এর প্রতিটি element এর উপর operation চালিয়ে নতুন একটি array তৈরি করার জন্য। original array পরিবর্তন না করে new array return করে।

- forEach()  একটি array এর প্রতিটি element এর উপর শুধু loop চালায়

# 3/ What is the difference between == and ===?

- == ব্যবহার করলে JavaScript  compare করে। data type check করে না 
- === ব্যবহার করে compare করে  data type check করে 
# 4/ What is the significance of async/await in fetching API data?
- async/await ব্যবহার করা হয় asynchronous operation যেমন: API call সহজভাবে handle করার জন্য।
  এটি Promise-based code কে সহজ ও readable করে
   
   - async keyword দিয়ে কোনো function কে asynchronous function বানানো হয়
   - await ব্যবহার করলে JavaScript Promise resolve হওয়া পর্যন্ত অপেক্ষা করে

 # 5/ Explain the concept of Scope in JavaScript (Global, Function, Block).

 - Scope মানে হলো — কোন variable কোথা থেকে access করা যাবে।
    অর্থাৎ একটি variable কোথায় visible বা usable হবে সেটাই scope।
 - global scope--- যে variable function এর বাইরে declare করা হয়, সেটি global scope।
   এটি program এর যেকোনো জায়গা থেকে access করা যায়। 
 - function scope  যে variable function এর ভিতরে declare করা হয়, সেটি শুধু সেই function এর ভিতরেই ব্যবহার করা যায়।  

 - block scope যে variable {} block এর ভিতরে declare করা হয়, সেটি শুধু সেই block এর ভিতরেই কাজ করে।

   let এবং const block scope follow করে। 
