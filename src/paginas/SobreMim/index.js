import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Edmilson Alison!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Sou desenvolvedor de software com uma vasta experiência em programação
        em Java. Tenho mais de 3 anos de experiência na área de desenvolvimento
        de software, trabalhando em projetos desafiadores que incluem a
        construção de um sistema ERP e trabalhando em dois grandes bancos.
      </p>
      <p className={styles.paragrafo}>
        Ao longo da minha carreira, tive a oportunidade de trabalhar com
        diversas tecnologias e ferramentas de desenvolvimento, como rabbitmq,
        postgresql, mysql, angular, spring boot, micro serviços e muitas outras.
        Aprendi a trabalhar com essas tecnologias, aplicando as melhores
        práticas e desenvolvendo soluções eficientes para problemas complexos.
      </p>
      <p className={styles.paragrafo}>
        Meu trabalho com sistemas ERP me permitiu desenvolver habilidades em
        análise de requisitos, design de arquitetura de software e gerenciamento
        de projetos. Isso me permitiu trabalhar com equipes multidisciplinares,
        colaborar em projetos e fornecer soluções de software de alta qualidade
        para nossos clientes.
      </p>
      <p className={styles.paragrafo}>
        Nos meus trabalhos com bancos, pude desenvolver soluções inovadoras para
        processamento de dados em grande escala e gerenciamento de transações
        financeiras. Isso me permitiu aplicar meu conhecimento em banco de dados
        e desenvolvimento de serviços para fornecer soluções de software
        eficientes e escaláveis.
      </p>
      <p className={styles.paragrafo}>
        Se você estiver procurando por um desenvolvedor de software experiente
        que possa fornecer soluções de software de alta qualidade, estou à
        disposição para colaborar em seus projetos. Entre em contato comigo para
        saber mais sobre como posso ajudá-lo a atingir seus objetivos de
        desenvolvimento de software.
      </p>
    </PostModelo>
  );
}
