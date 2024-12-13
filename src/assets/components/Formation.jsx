import {motion} from "framer-motion"
const Formation = () => {
    return (
      <div id="Formation" className="  pb-4">
        <h1 className="my-20 text-center text-4xl">
          La 
          <span className="text-neutral-500"> Formation.</span>
        </h1>
        <div className="flex flex-wrap lg:items-stretch ">
          {/* Card */}
          <motion.div
          whileInView={{opacity :1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 0.8}} className="w-full lg:w-1/2 lg:p-8 flex items-stretch">
            <div className="flex items-center justify-center flex-grow p-8 py-12 sm:p-12 rounded-3xl bg-white border border-white bg-opacity-80 shadow-2xl text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">10€/h</h2>
                <p className="text-lg text-gray-600">Ou pack de 10 séances pour 80 euros</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          whileInView={{opacity :1, x:0}}
          initial={{opacity:0, x: +100}}
          transition={{duration: 0.8}}
          className="w-full lg:w-1/2 flex items-stretch">
            <div className="flex justify-center lg:justify-start flex-grow">
              <p className="my-2 max-w-xl py-6 leading-loose">
                Cours d'une heure à l'unité ou en pack de 10, avec entre autres… : <br />
                Naviguer sur internet de façon sécurisé<br />
                Première approche des réseaux sociaux<br />
                Envoyer et recevoir des mails de façon sécurisé<br />
                Utilisation basique des logiciels de traitement de texte, retouche photo, etc.<br />
                Le cloud et ses utilités :
                <ul>
                  <li>
                    Que ce soit dans l’utilisation de logiciels ou de l'accès et à la navigation sur internet et les réseaux sociaux
                  </li>
                  <li>
                    Sécurité informatique : Protégez vos données sensibles avec les solutions de cybersécurité adaptées à vos besoins
                  </li>
                </ul>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Formation;
  