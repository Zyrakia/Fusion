import Fusion from "./index";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			billboardgui: BillboardGui;
			camera: Camera;
			frame: Frame;
			imagebutton: ImageButton;
			imagelabel: ImageLabel;
			screengui: ScreenGui;
			scrollingframe: ScrollingFrame;
			surfacegui: SurfaceGui;
			textbox: TextBox;
			textbutton: TextButton;
			textlabel: TextLabel;
			uiaspectratioconstraint: UIAspectRatioConstraint;
			uicorner: UICorner;
			uigradient: UIGradient;
			uigridlayout: UIGridLayout;
			uilistlayout: UIListLayout;
			uipadding: UIPadding;
			uipagelayout: UIPageLayout;
			uiscale: UIScale;
			uisizeconstraint: UISizeConstraint;
			uistroke: UIStroke;
			uitablelayout: UITableLayout;
			uitextsizeconstraint: UITextSizeConstraint;
			viewportframe: ViewportFrame;
		}
	}
}
