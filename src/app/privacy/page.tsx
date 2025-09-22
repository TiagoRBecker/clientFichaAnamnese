// pages/politica-de-privacidade.tsx
import { Container, Heading, Text, List, ListItem, Divider } from "@chakra-ui/react";

export default function PoliticaDePrivacidade() {
  return (
    <Container maxW="4xl" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Política de Privacidade
      </Heading>

      <Text mb={4}>
        Esta Política de Privacidade descreve como coletamos, utilizamos,
        armazenamos e protegemos os dados pessoais de nossos usuários, em
        conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados
        Pessoais (LGPD).
      </Text>

      <Divider my={6} />

      <Heading as="h2" size="md" mb={3}>
        1. Coleta de Dados
      </Heading>
      <List spacing={2} mb={4}>
        <ListItem>Dados de cadastro fornecidos pelo usuário (nome, e-mail, telefone, quando aplicável).</ListItem>
        <ListItem>Dados de autenticação via <b>Google Login</b> (OAuth/credenciais).</ListItem>
        <ListItem>Informações de transações processadas pela <b>Pagar.me</b> (meio de pagamento parceiro).</ListItem>
        <ListItem>Dados de uso para métricas internas, como visualizações e interações.</ListItem>
      </List>

      <Heading as="h2" size="md" mb={3}>
        2. Finalidade do Uso dos Dados
      </Heading>
      <List spacing={2} mb={4}>
        <ListItem>Criar e gerenciar contas de usuários.</ListItem>
        <ListItem>Processar pedidos e transações financeiras.</ListItem>
        <ListItem>Enviar comunicações relacionadas aos serviços, incluindo recuperação de carrinhos abandonados.</ListItem>
        <ListItem>Analisar métricas de uso para melhorar a experiência na plataforma.</ListItem>
      </List>
      <Text mb={4}>Não utilizamos os dados para fins de publicidade direcionada.</Text>

      <Heading as="h2" size="md" mb={3}>
        3. Compartilhamento de Dados
      </Heading>
      <Text mb={4}>
        Não comercializamos ou vendemos informações pessoais. O compartilhamento
        ocorre apenas com:
      </Text>
      <List spacing={2} mb={4}>
        <ListItem><b>Pagar.me</b>: para processar pagamentos com segurança.</ListItem>
        <ListItem><b>Google</b>: para autenticação de login.</ListItem>
      </List>
      <Text mb={4}>
        Esses parceiros possuem suas próprias políticas de privacidade, às quais
        o usuário também está sujeito.
      </Text>

      <Heading as="h2" size="md" mb={3}>
        4. Armazenamento e Segurança
      </Heading>
      <Text mb={4}>
        Todos os dados são armazenados em banco de dados seguro, com acesso
        restrito a pessoas autorizadas. Adotamos medidas técnicas e
        organizacionais para proteger os dados contra acessos não autorizados,
        perda ou alteração.
      </Text>

      <Heading as="h2" size="md" mb={3}>
        5. Direitos do Usuário
      </Heading>
      <Text mb={4}>
        De acordo com a LGPD, o titular dos dados pode, a qualquer momento:
      </Text>
      <List spacing={2} mb={4}>
        <ListItem>Solicitar acesso, correção ou exclusão de seus dados pessoais.</ListItem>
        <ListItem>Revogar o consentimento para uso de dados, quando aplicável.</ListItem>
        <ListItem>Solicitar informações sobre o compartilhamento de dados.</ListItem>
      </List>
      <Text mb={4}>
        Para exercer seus direitos, entre em contato pelo e-mail:{" "}
        <b>seuemail@dominio.com</b>.
      </Text>

      <Heading as="h2" size="md" mb={3}>
        6. Cookies
      </Heading>
      <Text mb={4}>
        Nosso site <b>não utiliza cookies de rastreamento ou publicidade</b>.
        Toda a gestão de dados é realizada em nosso backend.
      </Text>

      <Heading as="h2" size="md" mb={3}>
        7. Alterações na Política
      </Heading>
      <Text mb={4}>
        Esta Política de Privacidade pode ser atualizada a qualquer momento, para
        refletir melhorias ou mudanças em nossas práticas. Recomendamos que os
        usuários revisem periodicamente este documento.
      </Text>

      <Heading as="h2" size="md" mb={3}>
        8. Contato
      </Heading>
      <Text>
        Para dúvidas ou solicitações relacionadas à proteção de dados pessoais,
        entre em contato:
      </Text>
      <Text mt={2} fontWeight="bold">
        📧 seuemail@dominio.com
      </Text>
    </Container>
  );
}
