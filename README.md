## Sistema de Ponto
Foi construído um sistema de pontos para gerenciar a entrada e saída de usuários por meio de ponto.



O sistema tem uma tela inicial que pode estar direcionando para a tela de administrador ou para a tela de usuário.

<details>
  <summary>Tela inicial </summary>
  
  ![tela-inicial](https://github.com/alan-10/test-fullstask-talent-four/assets/50430772/52a5d874-b980-47b1-a70b-d38d1016f8cc)
</details>

## Tela Administrador
Na tela de administrador, podem ser realizadas as seguintes operações:

<details>
  <summary>Tela administrador </summary>
  
  ![admim](https://github.com/alan-10/test-fullstask-talent-four/assets/50430772/0861c1ea-337a-43e1-9d4d-cc0830c0d575)

</details>


- Criação de usuário
- Atualização de usuário
- Deletar usuários
Os usuários têm os seguintes campos: nome, email e matrícula. A matrícula é o código responsável por registrar o ponto.

## Tela do Cliente
<details>
  <summary>Tela cliente (bater ponto) </summary>
  
  ![ponto-registrar](https://github.com/alan-10/test-fullstask-talent-four/assets/50430772/c0a31fd5-616e-48d8-a25f-75c442fa890d)

</details>

Nesta tela, o usuário pode registrar o ponto utilizando o seu número de matrícula. Por dia, pode registrar o ponto duas vezes: entrada e saída.

## Voltando à Tela de Administração

<details>
  <summary>Tela Pontos de usuários </summary>
  
 ![tela-pontos-usuareios](https://github.com/alan-10/test-fullstask-talent-four/assets/50430772/29a09083-42d0-4132-a446-cb7b5914ba53)

</details>


Nesta tela, podemos listar todos os registros de ponto dos usuários, mostrando o nome, email, hora de chegada e hora de saída.







## Como roda a aplicação
1 - Fazer o download do repositório https://github.com/alan-10/test-fullstask-talent-four
2 - Após feito o download entar na pasta e  executar o comando docker compose up --build paara levantar a aplicação 
3 - acessar o http://localhost:3000 para ver a aplicação rodando

requisitos ter o docker intalado 

<details>
<summary>video mostrando o uso do sistema</summary>


https://github.com/alan-10/test-fullstask-talent-four/assets/50430772/108c13a2-f9ce-489d-b5f9-de09c6ffabc2


</details>





### Sobre o desenvolvimento
Encontrei uma certa comodidade ao utilizar o Node.js no backend, embora tenha enfrentado alguns desafios, especialmente ao lidar com o banco de dados Neo4j, o qual eu ainda não estava familiarizado.

A experiência prévia no desenvolvimento do backend me permitiu lidar de forma eficaz com os desafios apresentados pelo uso de um novo banco de dados e de um servidor com o qual não tinha muita familiaridade.

No entanto, no início, tive algumas dificuldades ao trabalhar com o Vuetify e o Neo4j, já que não estava muito habituado com essas tecnologias. Apesar disso, esses obstáculos não impediram a conclusão do projeto.


