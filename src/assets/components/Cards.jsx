import {motion} from "framer-motion"
const Cards = () => {
  return (
    
      <div id="Depannage" className="Border-b border-neutral-900 pb-4 " >
        <h1 className="my-20 text-center text-4xl">
            Comment ca marche ? 
        </h1>  
        <p className="px-8">
        Mon  engagement envers la satisfaction du client est au cœur de ma philosophie. 
        Je mets  un point d'honneur à fournir un service personnalisé, rapide et efficace. Que vous ayez besoin d'un dépannage urgent ou d'une stratégie à long terme, je suis  là pour vous accompagner.Faites moi confiance pour tous vos besoins en maintenance informatique. Contactez-moi dès aujourd'hui pour un devis gratuit et découvrez comment je peux  vous aider à tirer le meilleur parti de votre technologie.
        </p>
        <div className="flex flex-wrap" >
            <div className="w-full mg:w-1/2 lg:p-8" >
                <div className="flex items-center justify-center" >
                <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">

    <motion.div
    whileInView={{opacity :1, x:0}}
    initial={{opacity:0, x: -100}}
    transition={{duration: 0.5}}
        class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-white bg-opacity-80 shadow-2xl ">
        <div class="space-y-12">
            <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <span class="font-bold text-xl text-green-600">1</span>
            </div>
            <div class="space-y-4">
                <h3 class="text-2xl font-semibold text-gray-800 transition">1. Besoins d'aide ? </h3>
                <p class="text-gray-800">Vous avez un soucis avec votre pc ou un appareil connecter, besoins d'un ou plusieurs cours d'informatique? 
                </p>
            </div>
        </div>
    </motion.div>


    <motion.div
    whileInView={{opacity :1, y:0}}
    initial={{opacity:0, y: +100}}
    transition={{duration: 0.7}}
        class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-white bg-opacity-80 shadow-2xl ">
        <div class="space-y-12">
            <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                <span class="font-bold text-xl text-orange-600">2</span>
            </div>
            <div class="space-y-4">
                <h3 class="text-2xl font-semibold text-gray-800 transition">2. Réservez un RDV</h3>
                <p class="text-gray-800">Réservez votre RDV avec cédric en un coup de téléphone.</p>
            </div>
        </div>
    </motion.div>


    <motion.div
     whileInView={{opacity :1, x:0}}
     initial={{opacity:0, x: +100}}
     transition={{duration: 0.8}}
        class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-white bg-opacity-80   ">
        <div class="space-y-12">
            <div class="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                <span class="font-bold text-xl text-purple-600">3</span>
            </div>
            <div class="space-y-4">
                <h3 class="text-2xl font-semibold text-gray-800 transition">3. Votre technicien arrive chez vous</h3>
                <p class="text-gray-800">Cédric se déplace équipé du matériel indespensable pour le bon déroulement de la préstation, à la date et a l'heure du RDV.</p>
            </div>
        </div>
    </motion.div>
</div>
                </div>
            </div>
        </div>
      </div>

  )
}

export default Cards
