import { useState } from "react"
import { useAppTranslation } from "../../i18n/TranslationContext"

const WelcomeView = () => {
	const { t } = useAppTranslation()

	const [imagesBaseUri] = useState(() => {
		const w = window as any
		return w.IMAGES_BASE_URI || ""
	})

	return (
		<div style={{ padding: "10px 20px", flexShrink: 0 }} className="flex flex-col items-center mt-8 gap-2">
			<div
				style={{
					backgroundColor: "var(--vscode-foreground)",
					WebkitMaskImage: `url('${imagesBaseUri}/symbiote-logo.svg')`,
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskSize: "contain",
					maskImage: `url('${imagesBaseUri}/symbiote-logo.svg')`,
					maskRepeat: "no-repeat",
					maskSize: "contain",
				}}
				className="mx-auto">
				<img src={imagesBaseUri + "/symbiote-logo.svg"} alt="Symbiote logo" className="h-8 opacity-0" />
			</div>
			<h2 className="">{t("chat:greeting")}</h2>
		</div>
	)
}

export default WelcomeView
