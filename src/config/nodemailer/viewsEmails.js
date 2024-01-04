const recoverPassword = (hash) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            @media only screen and (max-width: 2000px) {
                .body-primary {
                    display: flex;
                    font-family: Verdana, sans-serif;
                    font-size: 14px;
                    background-color: rgb(233, 233, 233);
                    padding: 30px;
                }

                .containt {
                    width: 25%;
                }

                .main-primary {
                    padding: 30px;
                    background-color: white;
                    border-radius: 10px;
                    text-align: center;
                    width: 50%;
                    min-height: 25vh !important;
                }

                .img {
                    height: 150px;
                }

                .text {
                    padding: 0px 0px 5px 10px;
                }

                .border {
                    width: 100%;
                    height: 2px;
                    background-color: #cd9834;
                }
            }

            @media only screen and (max-width: 780px) {
                .main-primary {
                    width: 100%;
                }

                .containt {
                    width: 0%;
                }
            }
        </style>
    </head>

    <body>
        <div class="body-primary">
            <div class="containt"></div>
            <div class="main-primary">
                <div style="padding: 10px; display: flex; text-align: center">
                    <div style="width: 45%"></div>
                    <img class="img"
                        src="https://campus.rollingcodeschool.com/theme/image.php/boost/theme/1633815474/favicon" />
                    <div style="width: 45%"></div>
                </div>
                <div align="start" style="padding: 20px 10px">
                    <b>Estimado equipo de soporte técnico de Rolling Process</b>
                </div>
                <div align="start" class="text">Esperamos que este mensaje le encuentre bien. Hemos recibido una solicitud
                    para restablecer la contraseña asociada a su cuenta.</div>
                <div align="start" class="text">Para completar este proceso, por favor siga el enlace a continuación <a
                        href="${process.env.FE_URL_API}/recoverPassword/${hash}">Rolling Process</a></div>
            </div>
            <div class="containt"></div>
        </div>
    </body>
</html>`;

module.exports = { recoverPassword };
