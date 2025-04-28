import React from "react";
import { AlertTriangle } from "lucide-react";

const EventWarning: React.FC = () => {
  return (
    <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
      <div className="flex">
        <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-amber-400 mb-1">Внимание!</h3>
          <p className="text-gray-300 text-sm">
            Для участия в большинстве событий необходима предварительная регистрация. 
            Количество мест может быть ограничено. Рекомендуем регистрироваться заранее.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventWarning;
