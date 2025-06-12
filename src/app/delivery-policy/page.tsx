import React from 'react';

const DeliveryPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">送貨條款及細則</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">運送政策</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>客人必須全數繳付訂單及運費總額，HKTeaFactory方會安排貨品寄送。未完成付款的訂單將被視為放棄，訂單將被取消，已收取的款項將不予退回。</li>
            <li>貨物寄送服務將在所有訂單貨物齊全後進行。如果訂單中有貨物需要訂貨，其他貨物將不會進行派送。對於由此帶來的不便，HKTeaFactory恕不負責。</li>
            <li>請客人確保填寫的貨運資料準確無誤，包括收件人地址和收件人資料等。如果因資料錯誤導致派送失敗，HKTeaFactory概不負責，同時不會安排退款或重新發貨。</li>
            <li>提交訂單後，貨物派送地址和收件人資料不可更改。</li>
            <li>客人一旦完成付款程序，本公司不接受更改取貨地點的要求。</li>
            <li>請客人留意收件時間和日期。如果派送時無人簽收貨件導致貨物遺失或損壞，HKTeaFactory恕不負責。</li>
            <li>在極端天氣或極端情況下，可能導致貨物派送延遲或無法完成，HKTeaFactory恕不負責。</li>
            <li>請依照取貨通知電郵上的地點及日期自取貨品。因應突發情況如惡劣天氣、道路阻塞或封閉等，門市營業時間或有更改，請於取貨前致電該分店確認營業時間。</li>
            <li>如領取產品之門市因天氣及其他因素影響下而停止營業，客戶可於翌日前往該店鋪領取產品。</li>
            <li>取貨通知電郵不能兌換現金或其他貨品。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">送貨方式及收費</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>
              <strong>門市自取：</strong>客戶可以選擇到我們的門市自行取件。請注意，請由發出電郵開始計5個工作天內取件，逾期每天將收取$20的存倉費用。我們會通過電郵提供門市自取的地址。取貨時請提供有效的取貨通知電郵，逾期每天將收取$20的存倉費用。
            </li>
            <li>
              <strong>順豐送貨：</strong>我們使用順豐速運作為我們的主要送貨合作夥伴。客人可以選擇送貨到工商業或住宅地址；客人亦可選擇順豐營業站及順豐點自取、順豐智能櫃自取。如客人要求送貨到順豐營業站及順豐點自取、順豐智能櫃自取，建議先到下面順豐官方網站的超連結，查證最新取貨點的編號及地址：
              <ul className="list-circle pl-6 mt-2">
                <li><a href="https://htm.sf-express.com/hk/tc/use_clause/waybill_clause.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">順豐站地址 (sf-express.com)</a></li>
                <li><a href="https://htm.sf-express.com/hk/tc/use_clause/waybill_clause.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">順豐智能櫃地址 (sf-express.com)</a></li>
              </ul>
            </li>
            <li>
              <strong>運費支付：</strong>如果您的訂單單筆訂單淨值未滿$500，您將需要直接向順豐支付運費或選擇門市自取。請注意，運費支付由客戶承擔。
              <br />
              有關派送貨物的額外條款，請瀏覽順豐速遞網頁：<a href="https://htm.sf-express.com/hk/tc/use_clause/waybill_clause.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://htm.sf-express.com/hk/tc/use_clause/waybill_clause.html</a>
            </li>
            <li>
              <strong>送貨上門：</strong>如果您的訂單單筆訂單淨值滿$500可享免運費優惠，送貨至指定住宅地址。而未滿港幣$500之網上訂單，客戶可另加指定運費以送貨至指定住宅地址。指定運費會於結帳時自動計算。
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            香港送貨服務只限本地，不設海外送貨。送貨範圍包括香港島、九龍、新界及指定離島地區：愉景灣*、馬灣及東涌；並不適用於以下離島地區：長洲、大嶼山、梅窩、貝澳、長沙、塘福、水口、石壁、寶蓮寺、大澳及任何貨車禁止進入的區域。(*愉景灣附加運費將收取額外$400附加費)；物流中心、智能儲物櫃及集運倉均非送貨範圍，HKTeaFactory 有權取消相關訂單並收取5%行政費而不作另行通知。
          </p>
          <p className="text-gray-700 mt-2">
            唐樓或需要搬運上樓梯的住宅，可能會額外收取樓梯費及搬運費。建議在購買前，請先與我們的客戶服務主任查詢有關送貨詳情。
          </p>
          <p className="text-gray-700 mt-2">
            *如果地址附近無法停泊貨車，物流有可能收取推路費。建議在購買前，請先與我們的客戶服務主任查詢有關送貨詳情*
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">送貨細則</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-2">送貨通知：</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li>當您的訂單已發貨，我們將通過電郵向您發送出貨通知。請確保您提供的電郵地址正確，以便及時收到送貨通知。</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-2">送貨時間：</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>順豐送貨：</strong>順豐送貨的送貨時間通常根據順豐速遞的安排進行。</li>
            <li><strong>送貨上門：</strong>物流部會在送貨前一個工作天聯絡客人，並會與您確認日期後才會安排送貨。</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-2">運費政策：</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>免運費：</strong>如果您的訂單單筆訂單淨值滿$500可享免運費優惠，我們將為您提供免運費的服務。</li>
            <li><strong>運費計算：</strong>如果您的訂單金額未滿$500，可選擇順豐速遞或繳付$200送貨上門。</li>
            <li><strong>運費支付：</strong>當您的訂單發貨後，您將需要直接向順豐支付運費。請注意，運費支付由客戶承擔。</li>
          </ul>
          <p className="text-gray-700 mt-4">
            如有任何爭議 HKTeaFactory將保留最終決定權。
          </p>
        </section>
      </div>
    </div>
  );
};

export default DeliveryPolicyPage; 
