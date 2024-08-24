# Codificador

	Caso seja necessário alterar, mantive o código o código mais organizado possível, utilizando também
dos comentários o máximo que puder para explicar as funções em JS, principalmente.

Na estrutura HTML modifiquei:

	. O aviso de "apenas letras minúsculas e sem acento" apenas quando o usuário 
for digitar. Que achava fazer mais sentido;
	. Textarea que mostra o resultado de criptografar/descriptografar utilizei o 
readonly para não ser possível digitar no texto de resultado;


No CSS:
	. Adicionei um hover em todos os bottons,  mudando o background-color para Darkslategray e a cor
da fonte para White;

No JS:
	.Foi criado uma função para validar o texto inserido;
	.Criado uma função para mostrar uma mensagem de erro caso nada fosse inserido;
	.Uma função para dar um refresh na página ao clicar em copiar o texto;
	.Uma função para mudar a imagem e o texto de página não encontrada, para a 
para onde aparece o texto criptografado ou descriptografado;
	. Descriptografa utilizando um array com a chave de criptografia;
	. Uma função para criptografar separando os caracteres do texto em um array
com um split e, depois, substituindo com forEach e retornando join;
