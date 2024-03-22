# Detalhes da implementação - Português

## Front End (VueJS):

No front-end foi usado VueJS 3, importado como CDN visto que a idéia era fazer um webapp relativamente simples.

Eu comecei fazendo a tela de login, visto que ela era citada na história proposta, mas não há autenticação de usuário ou coisas do tipo, sendo que ao apertar o botão tanto na tela de registro quanto de login você é diretamente direcionado para a tela principal.

Já na tela principal, ao entrar nela é rodado uma função para capturar os dados da API, retornando todos os dados das viagens. Como tinham viagens com destinos iguais, na interface apareciam nomes repetidos, então há uma função para filtrar esses nomes e mostrar apenas um de cada tipo. Com a opção e a data selecionada o usuário pode prosseguir, e então ao clicar no botão de buscar é rodada uma função que filtra dentre as viagens aquela que tem o destino que o usuário buscou. Como a idéia é mostrar uma opção mais rápida e mais confortável e outra mais econômica, a primeira é filtrada baseada na menor duração de viagem, tendo como base o preço da passagem de nível confortável, em quanto na outra o filtro é por preço com base na mais barata (que geralmente também tem duração maior). Há também um botão de limpar que reseta os valores necessários pro seus estados iniciais.

Eu também criei um componente de botão personalizado, visto que ele era usado em todas as 3 telas.

![vue_html](https://github.com/RuanEmanuell/devblog/assets/113607857/736180d1-ebe8-4c02-b76e-5dfd2218a334)

## Back-End (Python com Flask)

Já no back, eu resolvi separar em dois arquivos em pastas distintas: 

- data/server.py: Este é o arquivo que contem a rota "/travel" que pega o arquivo "data.json" e retorna como json interpretável pelo browser pra mostrar as viagens necessárias

- files/static.py: Este arquivo contem as rotas para servir os arquivos estáticos necessários no servidor back-end

Em cada uma das pastas também há os arquivos de configurações das portas dos servidores que foram pedidas, sendo 3000 pro servidor back e 8080 pro servidor front.

![staticserving_flask](https://github.com/RuanEmanuell/devblog/assets/113607857/9f09deef-96cd-4921-87c3-864ab7a0a5b0)

## Script (shell)

Essa parte foi feita com shell, sendo apenas uma sequência de comandos simples para a instalação das dependências necessárias, incluindo o Phyton, pip, Python DotEnv para os arquivos de configuração .flaskenv, Flask e Flask-Cors por meio do pip e a instalação do pacote do flask para ser reconhecido o comando de rodar os servidores. Após isso eles (servidores back-end e front-end) são rodados em janelas diferentes e o browser é aberto na página de login. (Algumas dessas dependências foram ditas como já instaladas na máquina que vai ser usada para os testes, mas para ser mais simples na hora de eu mesmo testar decidi mantê-las)

Eu testei ele no meu computador pessoal (Linux Mint Cinnamon) após desinstalar as dependências e numa máquina virtual Ubuntu 22.04, sendo testado na máquina virtual tanto em casa tanto na minha faculdade no Windows 10.

![ubuntutest](https://github.com/RuanEmanuell/devblog/assets/113607857/27feb35d-95fe-4b1f-855d-2128831420f7)
![ubuntutestwin](https://github.com/RuanEmanuell/devblog/assets/113607857/ed1291c3-00c6-4e87-90c9-a890f213343e)

Eu escrevi mais sobre o desenvolvimento dele <a href="https://devblog-ruan.vercel.app/post/2?language=English">no meu blog</a>, se for de seu interesse.



# Implementation Details - English

## Front End (VueJS):

In the front end, VueJS 3 was used, imported as a CDN since the idea was to build a relatively simple web app. 

I started by creating the login screen, as it was mentioned in the proposed story, but there is no user authentication or similar features. When clicking the button on both the registration and login screens, you are directly redirected to the main screen.

On the main screen, upon entering it, a function is executed to fetch data from the API, returning all trip data. Since there were trips with identical destinations, duplicate names appeared in the interface, so there is a function to filter these names and show only one of each type. With the option and selected date, the user can proceed, and then when clicking the search button, a function is executed to filter among the trips the one with the destination the user searched for. As the idea is to show one option that is faster and more comfortable and another that is more economical, the first is filtered based on the shortest trip duration, based on the price of the comfortable level ticket, while the other is filtered by price based on the cheapest option (which usually also has a longer duration). There is also a clear button that resets the values necessary to their initial states.

I also created a custom button component, as it was used on all 3 screens.

![vue_html](https://github.com/RuanEmanuell/devblog/assets/113607857/736180d1-ebe8-4c02-b76e-5dfd2218a334)

## - Back-End (Python with Flask)

On the backend, I decided to separate it into two files in distinct folders:

    data/server.py: This is the file that contains the "/travel" route, which retrieves the "data.json" file and returns it as JSON interpretable by the browser to display the necessary trips.

    files/static.py: This file contains the routes to serve the necessary static files on the backend server.

In each of the folders, there are also configuration files for the server ports that were requested, with 3000 for the backend server and 8080 for the frontend server.

![staticserving_flask](https://github.com/RuanEmanuell/devblog/assets/113607857/9f09deef-96cd-4921-87c3-864ab7a0a5b0)

## Script (shell)

This part was done with shell scripting, being just a sequence of simple commands for installing the necessary dependencies, including Phyton, pip, Python DotEnv for the .flaskenv configuration files, Flask, and Flask-Cors via pip, and the installation of the Flask package to recognize the command to run the servers. After that, they (backend and frontend servers) are run in different windows, and the browser is opened on the login page.

I tested it on my personal computer (Linux Mint Cinnamon) after uninstalling the dependencies and on an Ubuntu 22.04 virtual machine, being tested on the virtual machine both at home and at my college on Windows 10.

![ubuntutest](https://github.com/RuanEmanuell/devblog/assets/113607857/27feb35d-95fe-4b1f-855d-2128831420f7)
![ubuntutestwin](https://github.com/RuanEmanuell/devblog/assets/113607857/ed1291c3-00c6-4e87-90c9-a890f213343e)

I wrote more about it's development <a href="https://devblog-ruan.vercel.app/post/2?language=English">on my blog</a>, if it is in your interest.
