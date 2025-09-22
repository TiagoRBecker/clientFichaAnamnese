" use client";
import { useTerms } from "@/utils/Queries/useTerms";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
type Props = {
  onClose: () => void;
  isOpen: boolean;
};
const Terms = ({ isOpen, onClose }: Props) => {
  const { accepted: acceptedTerms } = useTerms();
  const generateText = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl text-black">Termos e Condições de Uso</h2>
            <p className=" text-black ">
              Considerando que os documentos criados pela Contratada são de
              propriedade intelectual da Contratada e cedido somente para uso
              exclusivo do adquirente profissional ora contratante em seu
              restrito benefício privado e seu consultório ou instituto na qual
              atua localmente, é vedado a sua divulgação, venda ou
              compartilhamento para terceiros. Desta forma o adquirente desta
              cessão de uso, está plenamente ciente que lhe é vedado (proibido)
              o compartilhamento, cessão ou qualquer meio de transferência dos
              documentos adquiridos desta plataforma para terceiros.
            </p>
          </div>
        );
        break;
      case 2:
        return (
          <div className="flex flex-col gap-4">
            <h2 className=" text-black">Termos e Condições de Uso</h2>
            <p className="text-black">
              Ao aceitar os termos de uso, você concorda em cumprir e respeitar
              integralmente as seguintes diretrizes e condições estabelecidas
              neste documento. Estes termos de uso formam um contrato legal
              entre você e Ficha de Anamneses e regem o uso de nossos serviços e
              plataformas online.
            </p>
          </div>
        );
        break;

      default:
        break;
    }
  };
  const [step, setStep] = useState(1);
  const [accepted, setAccepted] = useState<Record<string, boolean>>({
    term1: false,
    term2: false,
  });
  const handleNextStep = (term: boolean) => {
    if (!term)
      return alert("Para continuar voce precisa aceitar os termos de uso !");
    if (step < 2) {
      setStep(step + 1);
    } else {
      acceptedTerms.mutate();
      setAccepted({
        term1: false,
        term2: false,
      });
      setStep(1);
      onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
      <ModalOverlay />
      <ModalContent py={10}>
        <ModalCloseButton />
        <ModalBody>
          {generateText(step)}

          <Checkbox
            borderColor={"black"}
            size="lg"
            className="mt-10"
            isChecked={accepted[`term${step}`]}
            onChange={(e) =>
              setAccepted({ ...accepted, [`term${step}`]: e.target.checked })
            }
          >
            Sim, utilizarei apenas para minha atividade Profissional e de minha
            equipe.
          </Checkbox>
        </ModalBody>

        <ModalFooter>
          <button
            className=" !bg-[#336DFF] text-white py-2 px-8 rounded-full"
            onClick={() => {
              handleNextStep(accepted[`term${step}`]);
            }}
          >
            Próximo
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Terms;
