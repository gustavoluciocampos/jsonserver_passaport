SOBRE A JWT
JWT (JSON Web Tokens) é uma estratégia de autenticação para APIs em REST simples e segura. Trata-se de um padrão aberto para autenticações web e é totalmente baseada em requests JSON entre o cliente e servidor. Seu mecanismo de autenticação funciona da seguinte maneira:

O cliente faz uma solicitação uma única vez ao enviar as credenciais de login e senha;
O servidor valida as credenciais e, se tudo estiver certo, ele retorna para o cliente um JSON com um token que codifica dados de um usuário logado no sistema;
Após receber o token, o cliente pode armazená-lo da forma que preferir, seja por LocalStorage, Cookie ou outros mecanismos de armazenamento do lado do cliente;
Toda vez que o cliente acessa uma rota que requere autenticação, ele apenas envia esse token para a API para autenticar e liberar os dados de consumo;
O servidor sempre valida esse token para permitir ou bloquear uma solicitação de cliente.