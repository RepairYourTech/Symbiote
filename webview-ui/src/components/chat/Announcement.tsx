import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"
import { useAppTranslation } from "@/i18n/TranslationContext"
import { Trans } from "react-i18next"

interface AnnouncementProps {
	version: string
	hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in ClineProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
	const { t } = useAppTranslation()

	const githubLink = (
		<VSCodeLink
			href="https://github.com/RepairYourTech/Symbiote"
			onClick={(e) => {
				e.preventDefault()
				window.postMessage(
					{ type: "action", action: "openExternal", data: { url: "https://github.com/RepairYourTech/Symbiote" } },
					"*",
				)
			}}>
			GitHub
		</VSCodeLink>
	)

	return (
		<div
			style={{
				backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
				borderRadius: "3px",
				padding: "12px 16px",
				margin: "5px 15px 5px 15px",
				position: "relative",
				flexShrink: 0,
			}}>
			<VSCodeButton
				appearance="icon"
				onClick={hideAnnouncement}
				title={t("chat:announcement.hideButton")}
				style={{ position: "absolute", top: "8px", right: "8px" }}>
				<span className="codicon codicon-close"></span>
			</VSCodeButton>
			<h2 style={{ margin: "0 0 8px" }}>{t("chat:announcement.title")}</h2>

			<p style={{ margin: "5px 0px" }}>{t("chat:announcement.description")}</p>

			{/* Symbiote Section */}
			<h3 style={{ margin: "12px 0 5px", fontSize: "14px" }}>{t("chat:announcement.symbioteSection")}</h3>
			<ul style={{ margin: "5px 0" }}>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.symbioteFeature1"
						components={{
							bold: <b />,
						}}
					/>
				</li>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.symbioteFeature2"
						components={{
							bold: <b />,
						}}
					/>
				</li>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.symbioteFeature3"
						components={{
							bold: <b />,
						}}
					/>
				</li>
			</ul>

			{/* Roo Code Section */}
			<h3 style={{ margin: "12px 0 5px", fontSize: "14px" }}>{t("chat:announcement.rooSection")}</h3>
			<ul style={{ margin: "5px 0" }}>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.feature1"
						components={{
							bold: <b />,
						}}
					/>
				</li>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.feature2"
						components={{
							bold: <b />,
						}}
					/>
				</li>
				<li>
					•{" "}
					<Trans
						i18nKey="chat:announcement.feature3"
						components={{
							bold: <b />,
						}}
					/>
				</li>
			</ul>

			<p style={{ margin: "10px 0px 0px" }}>
				<Trans
					i18nKey="chat:announcement.detailsDiscussLinks"
					components={{
						githubLink: githubLink
					}}
				/>
			</p>
		</div>
	)
}

export default memo(Announcement)
