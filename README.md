# 💫 Calculadora de IMC

# 💻 Resumo:
Este código implementa um cálculo de índice de massa corporal (IMC) e sua classificação.

# 💻 Tech Stack:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

# 💻 Lógica
Obtém uma referência para o elemento de formulário HTML na página usando document.querySelector("form").
Obtém uma referência para o elemento de resultado HTML na página usando document.querySelector(".result").
Adiciona um manipulador de eventos "submit" ao elemento de formulário, para que a função calculateIMC seja chamada quando o formulário for enviado.

A função calculateIMC é executada quando o formulário é enviado. Ela previne o comportamento padrão de envio de formulários usando event.preventDefault().
A função extrai o valor de peso e altura do formulário usando formElement.weight.value e formElement.height.value, respectivamente. 

O método parseFloat é usado para converter os valores de string para números.

O IMC é calculado usando a fórmula weight / (height * height) (peso dividido por altura vezes altura).

A classificação do IMC é determinada por meio de uma série de verificações condicionais, e a string adequada é atribuída à variável "classification".

Finalmente, o conteúdo do elemento de resultado é atualizado com o IMC calculado e sua classificação usando resultElement.innerHTML.


# 💻 Variáveis
formElement – captura os dados preenchidos no formulário.

resultElement – captura o campo do parágrafo "result" para mostrar o resultado do cálculo do IMC + classificação.

weight – Captura o valor do elemento peso fornecido pelo formulário e o converte para número decimal.

height – Captura o valor do elemento altura fornecido pelo formulário e o converte para número decimal.

imc – faz o cálculo do IMC com base nos dados de peso e altura.

classification – recebe a classificação conforme a verificação do valor do IMC.


# 💻 Estrutura de Decisão IF:
Verifica a classificação do imc com base no valor obtido no cálculo do IMC.
