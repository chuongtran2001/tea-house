//lấy Thông tin của sản phẩm
const giohang = document.querySelectorAll(".items-toast .btn-toast")
        giohang.forEach(function (button, index) {
            button.addEventListener("click", function (event) {
                var btnItems = event.target
                var toast = btnItems.parentElement
                var toastImg = toast.querySelector('img').src
                var toastName = toast.querySelector('.text-toast-t').innerText
                var toastPrice = toast.querySelector('.text-toast-b').innerText
                addcart(toastPrice, toastImg, toastName)
            })
        })
//thêm sản phẩm và kiểm tra
        function addcart(toastPrice, toastImg, toastName) {
            var addtr = document.createElement('tr')
            //kiểm tra
            var cartitem = document.querySelectorAll("tbody tr")
            for (var i=0; i<cartitem.length;i++){
                var toastT = document.querySelectorAll('.title')
                if(toastT[i].innerHTML == toastName) {
                    alert('Sản phẩm '+toastName+' của bạn đã có trong giỏ hàng')
                    return
                }
            }
            //thêm sản phẩm vào giỏ hàng
            var trcontent = '<tr><td style="display:flex; align-items:center"><img style="width:70px" src="'+toastImg+'" alt="" class="cars-img"><span class="title">'+toastName+'</span></td><td><p class="text-toast-b" style="color:#000">'+toastPrice+'</p></td><td><input class="sl" style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
            addtr.innerHTML = trcontent
            var cartTable = document.querySelector('tbody')
            cartTable.append(addtr)
            carttotal()
            deleteCart()
        }
 //Tính tổng tiền
        function carttotal() {
            var cartitem = document.querySelectorAll("tbody tr")
            var totalSum = 0
            for (var i=0; i<cartitem.length;i++){
                var inputValue = cartitem[i].querySelector('input').value
                var toastPrice = cartitem[i].querySelector('.text-toast-b').innerHTML
                totalCore = inputValue*toastPrice*1000
                totalSum = totalSum + totalCore
            }
            var cartTotalSum = document.querySelector('.price-total span')
            var cartSl = document.querySelector('.h-cart')
            cartTotalSum.innerHTML = totalSum.toLocaleString('de-DE')
            cartSl.innerHTML = totalSum.toLocaleString('de-DE')
            inputchange()
        }
//Xóa sản phẩm
        function deleteCart() {
            var cartitem = document.querySelectorAll("tbody tr")
            for (var i=0; i<cartitem.length;i++){
                var toastT = document.querySelectorAll('.cart-delete')
                toastT[i].addEventListener('click', function(event){
                    var cartDelete = event.target
                    var cartItem = cartDelete.parentElement.parentElement
                    cartItem.remove()
                    carttotal()
                })
            }
        }

//thay đổi số lượng giá tiền thay đổi theo
        function inputchange () {
            var cartitem = document.querySelectorAll("tbody tr")
            for (var i=0; i<cartitem.length;i++){
                var inputValue = cartitem[i].querySelector('input')
                inputValue.addEventListener('change',function(){
                    carttotal()
                })
            }
        }
// Đóng mở giỏ hàng
        const cartbtn = document.querySelector('.icon-cart')
        const cartshow = document.querySelector('.ti-shopping-cart')
        cartshow.addEventListener('click',function(){
            document.querySelector('.cart').style.right = '0'
        })

        cartbtn.addEventListener('click',function(){
            document.querySelector('.cart').style.right = '-100%'
        })
//Tìm kiếm sản phẩm
        function searchfunction() {
            let menusearch = document.querySelector('#nav-search')
            let menuitems = document.querySelectorAll('.items-toast')
           // menusearch.value = menusearch.value.toLowerCase()
            menuitems.forEach(function(el){
                let text = el.innerText
                if(text.indexOf(menusearch.value)>-1)
                    el.style.display=""
                else
                    el.style.display="none"
                
            })
        }
//Kiểm tra email
        function check_email(){
            var email=document.querySelector(".email-login").value;
            var checkemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(email != "" && checkemail.test(email))
                alert("Dang nhap thanh cong");
          
            if(email != "" && !checkemail.test(email)) 
            {
                alert("Email của bạn không đúng");
            }
            if(email == "")
            {
                alert("Chưa nhập thông tin");
            } 
           
        }
