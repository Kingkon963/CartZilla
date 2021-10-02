import { FC, Dispatch, SetStateAction } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ProductView from "./singleProduct/ProductView";

interface Props {
  openQuickView: boolean;
  setOpenQuickView: Dispatch<SetStateAction<boolean>>;
}

const QuickViewModal: FC<Props> = ({ openQuickView, setOpenQuickView }) => {
  return (
    <Modal
      open={openQuickView}
      onClose={() => setOpenQuickView(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openQuickView}>
        <div className="w-8/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md border-0 outline-none">
          <ProductView asModal />
        </div>
      </Fade>
    </Modal>
  );
};

export default QuickViewModal;
