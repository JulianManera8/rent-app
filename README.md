                                                        ROUTES

- landingpage => '/' => va a mostrar el login
    - en el login mostramos:
        - form login 
        - form signup




- dashboard => '/dashboard' => solo si el usuario logea, mostramos el dashboard
    -en el dashboard mostramos:
        -> Lista de los departamentos: que se pueda ver como lista o como cartas
            a) aca renderizamos:
                * foto (si hay, sino foto por defecto de un icono de un edificio)
                * ubicacion 
                * alias (opcional, si es que tiene)
            b) si tocamos un depto, nos lleva a la route de '/singleDepto'

        -> Pagos del mes pasado
            a) aca renderizamos que mes fue, y:
                i) mostrar primero como MVP un documento que va a ser el excel que hace javier, vos lo tocas y se te descarga
                    Un boton que diga 'historial de pagos' y eso te lleva a '/moneyHistorial'
                ii) cuando tenga el excel o planilla para gestion de los $$$ aca en la pagina, muestro estadisticas y cosas asi.
        



- Historial de $$ => '/moneyHistorial' => aca va a ir todo lo relacionado a pagos y cosas asi:
    - aca mostramos:
        -> i) Para el MVP, mostramos los meses que pasaron, cada uno con su archivo del excel de javier para poder descargarlo y verlo.

        -> ii) ver la opcion de armar un excel ahi mismo dentro de la pagina, entonces tendria acceso al cobro total y demas datos para poner estadisticas y poder ver que fue lo que anotó el javier, sin tener que upload o download archivos, y que se maneje todo desde la misma pagina, TODO.
        El excel puede tener varias hojas, una para cada mes y poder acceder a todos esos datos




- singleDepto => '/singleDepto.${id}' => aca nos vamos a traer el id del depto que mostramos, y con eso accedemos a mostrar todos los datos del depto seleccionado
    - aca mostramos:
        ->  todos los datos del depto, que son:
            * Propietario -
            * Locador -
            * Locatario -
            * Cobrador -
            * Facturador -
            * Usufructuario -
            * Vencimiento del usufructo -
            * Contrato -
            * $ al inicio del contrato -
            * $ a cobrar actualmente -
            * fecha de ultima actualizacion de precio -
            * Documentos extras -
            * Ocupado o libre -
            * Ubicacion -
            * Descripcion -
            * Fotos 
            * Inscripto en RELI -
            * etc

            Estos datos se van a poder editar desde esta route, ahi mismo, de ultima poner primero una verificacion de    "realmente quieres editar estos datos" antes de continuar.

        ->  por ultimo, un boton para volver al dashboard




- help/tutorial => 'help' => aca vamos a mostrar posibles preguntas en forma de acordeon, y un video tutorial de donde encontrar cada dato



                                            COMPONENTS
- form login con contraseña o google
- form signUp con contraseña o google
- sidebar
- main del dashboard
- tabla de dashboard para deptos
- tabla de datos de cada depto
- componente de pagos para dashboard
- componente de ver otros meses de pago

