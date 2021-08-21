import Fusion from "./index";

type JsxChild = boolean | Instance | ReadonlyArray<Instance> | ReadonlyMap<string | number, Instance> | undefined;

type JsxNode = JsxChild | Array<JsxChild>;

declare global {
	namespace JSX {
		interface IntrinsicAttributes {
			Key?: string | number;
			_jsx_children?: JsxNode;
		}
		type IntrinsicElement<T extends Instance> = IntrinsicAttributes & Partial<InstanceProperties<T>>;
		interface IntrinsicElements {
			billboardgui: IntrinsicElement<BillboardGui>;
			camera: IntrinsicElement<Camera>;
			frame: IntrinsicElement<Frame>;
			imagebutton: IntrinsicElement<ImageButton>;
			imagelabel: IntrinsicElement<ImageLabel>;
			screengui: IntrinsicElement<ScreenGui>;
			scrollingframe: IntrinsicElement<ScrollingFrame>;
			surfacegui: IntrinsicElement<SurfaceGui>;
			textbox: IntrinsicElement<TextBox>;
			textbutton: IntrinsicElement<TextButton>;
			textlabel: IntrinsicElement<TextLabel>;
			uiaspectratioconstraint: IntrinsicElement<UIAspectRatioConstraint>;
			uicorner: IntrinsicElement<UICorner>;
			uigradient: IntrinsicElement<UIGradient>;
			uigridlayout: IntrinsicElement<UIGridLayout>;
			uilistlayout: IntrinsicElement<UIListLayout>;
			uipadding: IntrinsicElement<UIPadding>;
			uipagelayout: IntrinsicElement<UIPageLayout>;
			uiscale: IntrinsicElement<UIScale>;
			uisizeconstraint: IntrinsicElement<UISizeConstraint>;
			uistroke: IntrinsicElement<UIStroke>;
			uitablelayout: IntrinsicElement<UITableLayout>;
			uitextsizeconstraint: IntrinsicElement<UITextSizeConstraint>;
			viewportframe: IntrinsicElement<ViewportFrame>;
		}
	}
}
