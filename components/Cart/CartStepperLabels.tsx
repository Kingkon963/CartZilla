import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const cartLabel = (
  <span className="flex-center gap-1">
    <ShoppingCartOutlinedIcon sx={{ fontSize: "1.2rem" }} />
    <span>Cart</span>
  </span>
);

const detailsLabel = (
  <span className="flex-center gap-1">
    <AccountCircleOutlinedIcon sx={{ fontSize: "1.2rem" }} />
    <span>Details</span>
  </span>
);

const shippingLabel = (
  <span className="flex-center gap-1">
    <LocalShippingOutlinedIcon sx={{ fontSize: "1.2rem" }} />
    <span>Shipping</span>
  </span>
);

const paymentLabel = (
  <span className="flex-center gap-1">
    <PaymentsOutlinedIcon sx={{ fontSize: "1.2rem" }} />
    <span>Payment</span>
  </span>
);

const reviewLabel = (
  <span className="flex-center gap-1">
    <VisibilityOutlinedIcon sx={{ fontSize: "1.2rem" }} />
    <span>Review</span>
  </span>
);

const StepperLabels = [
  cartLabel,
  detailsLabel,
  shippingLabel,
  paymentLabel,
  reviewLabel,
];

export default StepperLabels;
