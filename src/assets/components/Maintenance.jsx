import React from 'react';
import { motion } from "framer-motion";

const Maintenance = () => {
  return (
    <div id='Maintenance' className="border-b border-neutral-900 pb-4 my-16"> {/* Ajout de my-20 */}
      <h1 className="my-20 text-center text-4xl">
        M 
        <span className="text-neutral-500">aintenance.</span>
      </h1>
      <div className="flex flex-wrap lg:items-stretch">
        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-stretch"
        >
          <div className="flex justify-center lg:justify-start flex-grow">
            <p className="my-8 max-w-xl py-6 leading-loose"> {/* Augmentation de my-2 à my-8 */}
              Mon engagement envers la satisfaction du client est au cœur de ma philosophie. <br />
              Je mets un point d'honneur à fournir un service personnalisé, rapide et efficace. Que vous ayez besoin d'un dépannage urgent 
              ou d'une stratégie à long terme, je suis là pour vous accompagner. Faites-moi confiance pour tous vos besoins en maintenance informatique. 
              Contactez-moi dès aujourd'hui pour un devis gratuit et découvrez comment je peux vous aider à tirer le meilleur parti de votre technologie.
            </p>
          </div>
        </motion.div>
        {/* Card */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: +100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-stretch"
        >
          <div className="flex items-center justify-center flex-grow p-8 py-12 sm:p-12 rounded-3xl bg-white border border-white bg-opacity-80 shadow-2xl text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">30€/h</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance;
