import React from "react";
import "./Thanks.css"
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,BsFillEmojiNeutralFill,BsFillEmojiFrownFill} from 'react-icons/bs' 

function Thanks({data}) {
  const emojiData={ 
    unsatisfied:<BsFillEmojiFrownFill />, 
    neutral: <BsFillEmojiNeutralFill />, 
    satisfied:<BsFillEmojiSmileFill />, 
    very_satisfied:<BsFillEmojiHeartEyesFill />
  }
  return (
    <div className="thanks-container">
      <h2>falta pouco...</h2>
      <p>A sua opinião é muitro importante, 
        em breve voce receberá um cupom de 10% de deconto para sua próxima compra</p>
        <p>Para concluir sua avaliação clique no botão de Enviar Abaixo</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3> 
      <p className="review-data"> 
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p> 
      <p className="review-data"> 
        <span>Comentários</span>
        {data.comment}
      </p>
    </div>
  );
}

export default Thanks;
