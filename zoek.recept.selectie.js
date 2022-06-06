         function openPage() {
            var x = document.getElementById("search").value;
          switch (x) {
            case "recept colapudding":
            case  "recept cola pudding":
            case "colapudding":
            case "cola pudding":
              window.open("recept.html");
              break
            case "recept suikerbrood":
            case "recept suiker brood":
            case "suikerbrood":
            case "suiker brood":
              window.open("suikerbrood.html");
              break
            case "recept kruidenboterbrood":
            case "recept kruidenboterstokbrood":
            case "recept kruidenboter stokbrood":
            case "kruidenboterbrood":
            case "kruidenboterstokbrood":
            case "kruidenboter stokbrood":
              window.open("niveau : makelijk l stokbrood met kruidenboter.html")
              break
            case "recept patat":
            case "recept frietjes":
            case "recept patatjes":
            case "recept friet":
            case "patat":
            case "frietjes":
            case "patatjes":
            case "friet":
              window.open("patat.html")
          }
        }
