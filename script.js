const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nama LEngkap: ${fullName.value}<br> Email: ${email.value}<br> Nomor Telepon: ${phone.value}<br> Pesan: ${mess.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ghifaripamili@gmail.com",
        Password : "ADB5E5A9A506455B8B2EDE468EE06A8C97BF",
        To : 'ghifaripamili@gmail.com',
        From : "ghifaripamili@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Terkirim!",
                text: "Pesan berhasil terkirim!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})