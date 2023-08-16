var contenido=document.getElementById('contenido')

    function acceso(){
        contenido.innerHTML=`
        <div class="inicio">
            <h2>Inicia sesión</h2>
            <form action="">
                <input type="text" name="usuario" id="usuario" placeholder="Usuario"><br>
                <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña"><br>
                <input type="submit" value="Iniciar sesión" id="iniciar" class="iniciar">
            </form>
        </div>`
    }

    function registro(){
        contenido.innerHTML=`
        <div class="registro">
            <h2>Regístrate</h2>
            <form action="">
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"><br>
                <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos"><br>
                <input type="text" name="usuario" id="userRegistro" placeholder="Usuario"><br>
                <input type="email" name="mail" id="mail" placeholder="E-mail"><br>
                <input type="password" name="contrasena" id="contra" placeholder="Contraseña"><br>
                <input type="password" name="contrasena" id="contra2" placeholder="Repite contraseña"><br>
                <input type="text" name="estudios" id="estudios" placeholder="Nivel de estudios"><br>
                <input type="tel" name="telefono" id="telefono" placeholder="Teléfono"><br>
                <input type="submit" value="Registrarse" id="registrarse" class="iniciar" onclick="registrarse()">
            </form>
        </div>`
    }

    function informacion(){
        contenido.innerHTML=`
        <div class="nosotros">
            <h2>Sobre nosotros</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates laudantium asperiores itaque quam vitae in eligendi quis eos autem quibusdam facilis nostrum praesentium ad, earum, voluptatem dolore dolor doloribus sit?
            Veritatis rem voluptatum laudantium ipsum aperiam ducimus voluptates placeat illo nobis expedita ad delectus omnis, soluta quas deleniti voluptatibus recusandae aut ipsam quo quasi tempora dicta quae atque doloremque! Hic!</p>
            <p>Quo, iusto? Eaque impedit aliquam nemo tempora? Ab ut debitis sequi animi delectus magni inventore veritatis neque veniam fugiat pariatur ducimus sapiente consequuntur ex voluptate labore, libero doloremque nam voluptatem.
            Accusamus laudantium non voluptatem dolorum consequatur quo ab unde quasi corrupti maiores sapiente, suscipit voluptatibus culpa odio incidunt accusantium eaque, harum voluptate adipisci! Nulla temporibus laborum recusandae ipsa, magni fugit!
            Facere obcaecati sed officiis omnis laborum cupiditate fugit doloribus, temporibus ad nihil eligendi, aliquid iste voluptas non? Non blanditiis eos atque in, odio itaque quas magni cum dolores ad deleniti!</p>
            <h3>Nuestras instalaciones</h3>
            <img src="Media/academia.jpg" alt="Foto aula" class="aula1">
            <p class="pAula">
            Atque quasi porro sint asperiores architecto aut minus ipsum magnam facere, optio veritatis fugit doloribus natus reiciendis veniam impedit debitis? Placeat tenetur sequi ad magnam illum reprehenderit odio doloribus voluptate?
            Nam ex dolorem itaque officia maxime vero amet nemo, laborum error! Tempore dolore similique expedita consequuntur ad recusandae sequi nulla quia praesentium, consectetur beatae eaque assumenda veritatis minus quos iure?
            Et hic architecto cum sit odio nulla, distinctio eum earum qui modi eligendi exercitationem, magni minus quia consequuntur rerum! Maxime magnam itaque rerum repellat sapiente accusamus nihil reprehenderit id et!
            Officia at odit quisquam quibusdam dicta id itaque explicabo magnam excepturi recusandae, maiores earum similique. Sequi esse eius pariatur, ab labore fugiat voluptate qui ipsa, error quia, dolores maiores nam?
            </p>
            <p>
            Pariatur laborum nemo sapiente assumenda excepturi necessitatibus impedit eveniet at nam! At eum, minima ea sint vel facilis magnam neque deleniti corrupti nihil, esse explicabo vitae velit, repellendus id sed!
            Suscipit quisquam eius eligendi, id laboriosam, eos incidunt provident molestiae illum cumque nam temporibus placeat voluptates culpa? Similique, numquam quidem? Provident aut nisi nam qui quidem ipsum porro non consequuntur.
            </p>
            <p>Harum corporis ad dolores? Laboriosam adipisci eligendi dolor nulla illum vitae, consequuntur ullam numquam, at omnis quis! Saepe a in aut! Harum, accusantium officiis. Optio illum suscipit numquam quidem quae!
            Doloremque culpa maiores blanditiis quo, molestias ex eos et voluptas accusantium nobis! Dolorum quo ea corporis, quos porro dolore commodi doloribus aut explicabo tempora vel nam fugit suscipit optio ipsum.
            Porro veritatis quibusdam nostrum, doloribus voluptas eum suscipit. Sapiente eveniet, impedit corporis consequuntur dicta sint? Esse velit aliquam sit omnis, exercitationem error nesciunt, incidunt fugiat perferendis distinctio enim animi. Officiis?
            Atque molestias doloremque natus voluptate dolores. Mollitia, voluptates. Nobis obcaecati necessitatibus voluptas? Voluptates, dolore aliquid ad corporis suscipit reprehenderit. Aliquid tempore quis laudantium voluptas molestias tenetur ratione nam, cumque nihil.</p>
        </div>`
    }

    function curso(){
        contenido.innerHTML=`
        <div class="curso">
            <h2>Nombre del curso</h2>
            <img src="Media/curso.png" alt="Imagen del curso" class="cursoImg">
            <h3>Contenidos del curso</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>TypeScript</li>
                <li>POO</li>
                <li>Angular</li>
            </ul>
            <h3>Acceder a los modulos del curso</h3>
            <input type="submit" value="Accede al curso" class="iniciar" id=" accederCur">
        </div>`
    }

    function contacto(){
        contenido.innerHTML=`
        <div class="contacto">
            <h2>Contacta con nostros</h2>
            <form action="">
                <input type="text" name="name" id="name" placeholder="Nombre"><br>
                <input type="email" name="email" id="email" placeholder="E-Mail"><br>
                <input type="text" name="asunto" id="asunto" placeholder="Asunto"><br>
                <textarea name="" id="" cols="30" rows="10" class="textarea"></textarea><br>
                <input type="submit" value="Enviar" class="iniciar">
            </form>
        </div>`
    }

    //REGISTRO
    // function registrarse(){
    //     var datosUsu=[];

    //     var nombre=document.getElementById('nombre').value;
    //     var apellidos=document.getElementById('apellidos').value;
    //     var mail=document.getElementById('mail').value;
    //     var contra=document.getElementById('contra').value;
    //     var contra2=document.getElementById('contra2').value;
    //     var estudios=document.getElementById('estudios').value;
    //     var telefono=document.getElementById('telefono').value;

    //     console.log(nombre+"--"+apellidos+"--"+mail+"--"+contra+"--"+contra2+"--"+estudios+"--"+telefono)
    // }

$(document).ready(function(){
    const oscuro= $('#oscuro');

    oscuro.click
})

