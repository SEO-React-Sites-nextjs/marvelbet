import { ReactNode } from "react";

interface FeatureRow {
  id: string;
  columns: ReactNode[];
}

interface FeatureDivProps {
  title: string;
  thead: ReactNode[];
  rows: FeatureRow[];
  className?: string;
}

export default function FeatureDiv({
  title,
  thead,
  rows,
  className,
}: FeatureDivProps) {
  return (
    <div className={`feature-table-wrapper${className ? " " + className : ""}`}>
      <h3>{title}</h3>
      <div className="feature-table" role="table">
        <div className="item-thead" role="rowgroup">
          <div className="item-tr" role="row">
            {thead.map((cell, index) => (
              <div className="item-td" role="columnheader" key={index}>
                {cell}
              </div>
            ))}
          </div>
        </div>

        <div className="item-tbody" role="rowgroup">
          {rows.map((row) => (
            <div className="item-tr" role="row" key={row.id}>
              {row.columns.map((col, i) => (
                <div className="item-td" role="cell" key={i}>
                  {col}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
