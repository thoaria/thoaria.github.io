export default function TooltipTemplate({ children, content } : { children: React.ReactNode; content: string }) {
  return (
    <div>
      <a data-tooltip-id="my-tooltip" data-tooltip-content={content} data-tooltip-place="bottom">
        {children}
      </a>
    </div>
  );
}